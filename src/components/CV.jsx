import React, { useState } from "react";
import WindowFrame from "./WindowFrame";
import { data as cv } from "../data/data";
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = styled.ul`
    display: flex;
    gap: 5px;
`;
const CvInner = styled.div`
    height: ${(props) => (props.minimize ? "220px" : "90vh")};
    width: ${(props) => (props.minimize ? "337px" : "100vw")};
    margin: ${(props) => (props.minimize && "-20px -11px") || "-20px -23px"};
    overflow-y: scroll;
    padding: 20px 30px;
    user-select: text;
    *:not(ul, li) {
        padding-bottom: 10px;
    }
    li {
        padding-bottom: 5px;
    }
`;

export default function CV({ show, setShow, collaps, cvCollaps, image }) {
    const folder = useSelector((folder) => folder);
    const [minimize, setMinimize] = useState(true);

    return (
        <div className={cvCollaps ? "window-collaps" : "window-uncollaps"}>
            <WindowFrame
                name="Резюме - Блокнот"
                setShow={setShow}
                img={"MyComputer"}
                collaps={collaps}
                show={show}
                image={image}
                minimizeStatus={setMinimize}
            >
                <div className="window__main">
                    <CvInner minimize={minimize}>
                        <h2>{cv.name}</h2>
                        <h3>{cv.direction}</h3>
                        <p>{cv.summary}</p>
                        <h3>{cv.skillsName}</h3>
                        <ul>
                            {cv.skills?.map((item, id) => (
                                <List key={id + item}>
                                    <em>{item.name}</em>
                                    <li>{item.list}</li>
                                </List>
                            ))}
                        </ul>
                        <h3>{cv.expText}</h3>
                        <ul>
                            {cv.experience?.map((item, id) => (
                                <div key={id + item}>
                                    <h3>- {item.expPlace}</h3>
                                    <h3>{item.expPeriod}</h3>
                                    {item.expRespon?.map((item, id) => (
                                        <div key={id + item}>
                                            <li>- {item}</li>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </ul>
                    </CvInner>
                </div>
            </WindowFrame>
        </div>
    );
}
