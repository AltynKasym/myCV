import React from "react";
import WindowFrame from "./WindowFrame";
import { data } from "../data/data";
import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
    display: flex;
    gap: 5px;
    font-size: 0.9rem;

    li {
        display: flex;
    }
`;

const Title = styled.h1`
    font-size: 0.9rem;
`;
const PortfolioInner = styled.div`
    height: ${(props) => (props.minimize ? "320px" : "90vh")};
    width: ${(props) => (props.minimize ? "337px" : "100vw")};
    margin: ${(props) => (props.minimize && "-20px -11px") || "-20px -23px"};
    padding: ${(props) =>
        props.minimize ? "20px 20px 30px" : "20px 40px 50px"};
    overflow-y: scroll;
    padding: 20px 30px;
    user-select: text;
    *:not(ul, li) {
        padding-bottom: 10px;
    }
    li {
        padding-bottom: 5px;
    }
    h2 {
        padding-bottom: 20px;
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

const Textblock = styled.div`
    padding: 0px 10px;

    * {
        margin-bottom: 5px;
    }
`;
const Image = styled.img`
    width: ${(props) => (props.minimize ? "100px" : "250px")};
    height: ${(props) => (props.minimize ? "70px" : "160px")};
    /* width: 100px; */
    /* height: 70px; */
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
    const [minimize, setMinimize] = useState(true);

    return (
        <div className={contactCollaps ? "window-collaps" : "window-uncollaps"}>
            <WindowFrame
                name="Портфолио"
                setShow={setShow}
                img={"MyComputer"}
                show={show}
                collaps={collaps}
                image={image}
                minimizeStatus={setMinimize}
            >
                <div className="window__main">
                    <PortfolioInner minimize={minimize}>
                        <h2>Портфолио</h2>

                        {data.projects?.map((item, id) => (
                            <List key={id + item}>
                                <li>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        minimize={minimize}
                                    />
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
                    </PortfolioInner>
                </div>
            </WindowFrame>
        </div>
    );
}
