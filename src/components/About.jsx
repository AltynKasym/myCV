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

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 29px;
    box-shadow: 0 0 6px;
    position: absolute;
    top: 40px;
    left: 227px;
    background-color: rgb(0, 0, 0, 0.5);
    cursor: pointer;
`;

export default function About({
    show,
    setShow,
    collaps,
    contactCollaps,
    image,
}) {
    return (
        <div className={contactCollaps ? "window-collaps" : "window-uncollaps"}>
            <WindowFrame
                name="Обо мне"
                setShow={setShow}
                img={"MyComputer"}
                show={show}
                collaps={collaps}
                image={image}
            >
                <div className="window__main">
                    <CvInner>
                        <h3>Обо мне</h3>

                        {cv.contacts?.map((item, id) => (
                            <List key={id + item}>
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
