import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";
import { Certificate} from "shared/project-card-footer/ProjectCardFooter";

export const Certifications: FC = () => {
    const [certificationsExpanded, setCertificationsExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Certifications" />

            <br />

            <Accordion pt="2" allowMultiple index={certificationsExpanded} id="certifications">
                {configs.about.certifications.map((cert, idx) => (
                    <div>                  
                    <AccordionItem p="0" border="0" mb="0" key={`panel-${cert.title}`}>
                        <Expandable
                            title={cert.title}
                            subTitle={cert.subTitle}
                            date={cert.date}
                            content={cert.content}
                            id={cert.id}
                            idx={idx}
                            onChange={setCertificationsExpanded}
                            expanded={certificationsExpanded}
                        />
                    </AccordionItem>
                    {cert.link && 
                    <AccordionItem p="0" border="0" mb="10" ml="-4" mt="-2">
                        <Certificate site={cert.link} />
                    </AccordionItem>
                    }
                    </div>
                ))}
            </Accordion>
        </>
    );
};
