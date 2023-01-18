import React, { useState } from "react";
import WindowFrame from "./WindowFrame";
import { CVdata as cv } from "../data/cv";
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = styled.ul`
    display: flex;
    gap: 5px;
`;
const CvInner = styled.div`
    height: ${({ collaps }) => (collaps && "320px") || "90vh"};
    overflow-y: scroll;
    margin: ${({ collaps }) => (collaps && "-21px -5px") || "-21px -15px"};
    padding: 20px;
    user-select: text;
    *:not(ul, li) {
        padding-bottom: 10px;
    }
    li {
        padding-bottom: 5px;
    }
`;

export default function CV({ show, setShow, collaps, cvCollaps }) {
    const folder = useSelector((folder) => folder);

    return (
        <div
            style={
                cvCollaps
                    ? {
                          position: "absolute",
                          bottom: "-50px",
                          //   transform: "scale(0.5)",
                          transition: "1s",
                      }
                    : { transition: "1s" }
            }
        >
            <WindowFrame
                name="Резюме - Блокнот"
                setShow={setShow}
                img={"MyComputer"}
                collaps={collaps}
                show={show}
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
