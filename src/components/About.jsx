import React from "react";
import WindowFrame from "./WindowFrame";
import { data as cv } from "../data/data";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 5px;
    font-size: 0.9rem;

    p {
        padding-bottom: 10px;
    }
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
    }
    a {
        color: black;
    }
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

                        {cv.about?.map((item, id) => (
                            <List key={id + item}>
                                <p>{item}</p>
                            </List>
                        ))}
                    </CvInner>
                </div>
            </WindowFrame>
        </div>
    );
}
