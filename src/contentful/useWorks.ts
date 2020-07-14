import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';

interface WorksStore {
    loading: boolean;
    works: {
        name: string;
        image: string;
        url: string;
        priority: number
    }[];
}

export const useWorks = (): WorksStore => {
    const [recentWorks, setRecentWorks] = useState<WorksStore>({
        loading: true,
        works: [],
    });

    useEffect(() => {
        const query = {
            content_type: 'works'
        };

        type ExpectedOutput = {
            name: string;
            image: any;
            url: string;
            priority: number
        };

        CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
            .then((response) => {
                console.log({ response })
                const worksData = response.items
                    .map((item) => {
                        console.log({ item })
                        return {
                            name: item.fields.name,
                            image: item.fields.image?.[0].fields.file.url,
                            url: item.fields.url,
                            priority: item.fields.priority,
                        };
                    })
                    .sort(({ priority: a }, { priority: b }) => a - b);
                console.log(worksData)
                setRecentWorks({
                    loading: false,
                    works: worksData,
                });
            });
    }, []);
    return recentWorks;
};
