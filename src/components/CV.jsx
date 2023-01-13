import React from "react";
import WindowFrame from "./WindowFrame";
import { CVdata as cv } from "../data/cv";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 5px;
`;
const CvInner = styled.div`
    height: 320px;
    overflow-y: scroll;
    margin: -21px -15px;
    padding: 20px;
    user-select: text;
    *:not(ul, li) {
        padding-bottom: 10px;
    }
    li {
        padding-bottom: 5px;
    }
`;

export default function CV({ show, setShow }) {
    return (
        <div
            className={
                show
                    ? "myComp-window window myComp-window-vis"
                    : "myComp-window window"
            }
            // style={{
            //     width: "100vw",
            //     height: "100vh",
            //     position: "absolute",
            //     top: "0px",
            //     left: "0px",
            // }}
        >
            <WindowFrame
                name="Резюме - Блокнот"
                setShow={setShow}
                img={"MyComputer"}
            >
                <div className="window__main">
                    <CvInner>
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
