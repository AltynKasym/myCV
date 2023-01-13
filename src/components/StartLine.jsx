import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NetworkImg from "../assets/media/images/Network.ico";
import VolumeImg from "../assets/media/images/Volume.ico";
import OpenedFolder from "./OpenedFolder";
import StartButton from "./StartButton";
import StartClock from "./StartClock";
import StartWindow from "./StartWindow";

const FooterDiv = styled.div`
    display: flex;
    align-items: center;
`;

export default function StartLine() {
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
    };
    const folder = useSelector((folder) => folder);
    console.log(folder);
    const sortedFolder = [...folder];

    return (
        <div className="footer-line">
            <StartWindow show={isShowFolder} />
            <div className="footer">
                <FooterDiv>
                    <StartButton
                        showFolder={showFolder}
                        isShowFolder={isShowFolder}
                    />
                    {sortedFolder
                        .sort((a, b) => a.status - b.status)
                        ?.map((item, id) => {
                            if (item.status) {
                                switch (item.name) {
                                    case "myComputer":
                                        return (
                                            <OpenedFolder
                                                foldersName={"Мой компьютер"}
                                                key={id + item}
                                            />
                                        );

                                    case "cv":
                                        return (
                                            <OpenedFolder
                                                foldersName={"Резюме"}
                                                key={id + item}
                                            />
                                        );
                                    case "contacts":
                                        return (
                                            <OpenedFolder
                                                foldersName={"Контакты"}
                                                key={id + item}
                                            />
                                        );
                                }
                            }
                        })}
                </FooterDiv>
                <StartClock />
            </div>
        </div>
    );
}
