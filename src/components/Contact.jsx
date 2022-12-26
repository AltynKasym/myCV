import React from "react";
import WindowFrame from "./WindowFrame";
import { CVdata as cv } from "../data/cv";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 5px;
`;
const CvInner = styled.div`
    /* height: 320px; */
    margin: -21px -15px;
    padding: 20px;
    user-select: text;
    h3 {
        padding-bottom: 20px;
    }
    li {
        padding-bottom: 15px;
        padding-left: 8px;
    }
    a {
        color: black;
    }
    ul {
        &::before {
            background-size: 15px 15px;
            display: inline-block;
            width: 15px;
            height: 15px;
            content: "";
        }

        &:nth-child(2)::before {
            background-image: url("https://cdn-icons-png.flaticon.com/512/2948/2948111.png");
        }
        &:nth-child(3)::before {
            background-image: url("https://cdn-icons-png.flaticon.com/512/2947/2947981.png");
        }
        &:nth-child(4)::before {
            background-image: url("https://cdn-icons-png.flaticon.com/512/54/54469.png");
        }
        &:nth-child(5)::before {
            background-image: url("https://cdn-icons-png.flaticon.com/512/3800/3800073.png");
        }
        &:nth-child(6)::before {
            background-image: url("https://cdn-icons-png.flaticon.com/512/2564/2564766.png");
        }
    }
`;

export default function Contact({ show, setShow }) {
    return (
        <div
            className={
                show
                    ? "myComp-window window myComp-window-vis"
                    : "myComp-window window"
            }
        >
            <WindowFrame
                name="Контакты - Блокнот"
                setShow={setShow}
                img={"MyComputer"}
            >
                <div className="window__main">
                    <CvInner>
                        <h3>Контакты</h3>

                        {cv.contacts?.map((item) => (
                            <List>
                                <li>
                                    <a target="_blank" href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            </List>
                        ))}
                    </CvInner>
                </div>
            </WindowFrame>
        </div>
    );
}
