import React from "react";
import WindowFrame from "./WindowFrame";
import { data } from "../data/data";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 5px;

    li {
        display: flex;
    }
`;

const Title = styled.h1`
    font-size: 0.9rem;
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
        /* padding-left: 8px; */
    }
    a {
        color: black;
    }
    /* ul {
        &::before {
            background-size: 15px 15px;
            display: inline-block;
            width: 15px;
            height: 15px;
            content: "";
        }
    } */
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

const Textblock = styled.div`
    padding: 0px 10px;

    * {
        margin-bottom: 5px;
    }
`;
const Image = styled.img`
    width: 100px;
    height: 70px;
`;
const Button = styled.button`
    padding: 5px 20px;
    border: 2px outset #9c9c9c;
    transition: 0.1s;

    &:hover {
        transition: 0.1s;
        transform: scale(1.1);
    }

    &:active {
        border: 2px inset #9c9c9c;
    }
`;

export default function Portfolio({
    show,
    setShow,
    collaps,
    contactCollaps,
    image,
}) {
    return (
        <div className={contactCollaps ? "window-collaps" : "window-uncollaps"}>
            <WindowFrame
                name="Портфолио"
                setShow={setShow}
                img={"MyComputer"}
                show={show}
                collaps={collaps}
                image={image}
            >
                <div className="window__main">
                    <CvInner>
                        <h3>Портфолио</h3>

                        {data.projects?.map((item, id) => (
                            <List key={id + item}>
                                <li>
                                    <Image src={item.image} alt={item.name} />
                                    <Textblock>
                                        <Title>{item.name}</Title>
                                        <p>
                                            <span>{item.description}</span>
                                        </p>
                                        <p>
                                            {" "}
                                            Технологии:{" "}
                                            <span>{item.technologies}</span>
                                        </p>
                                        <a target="_blank" href={item.url}>
                                            <Button>Перейти</Button>
                                        </a>
                                    </Textblock>
                                </li>
                            </List>
                        ))}
                    </CvInner>
                </div>
            </WindowFrame>
        </div>
    );
}
