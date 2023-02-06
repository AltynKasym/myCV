import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NetworkImg from "../assets/media/images/Network.ico";
import VolumeImg from "../assets/media/images/Volume.ico";
import { collapsFolder, uncollapsFolder } from "../store/FolderSlice";
import OpenedFolder from "./OpenedFolder";
import StartButton from "./StartButton";
import StartClock from "./StartClock";
import StartWindow from "./StartWindow";

import MyComputerImage from "../assets/media/images/MyComputer.ico";
import FolderImage from "../assets/media/images/Folder.ico";
import CVImage from "../assets/media/images/resume.ico";
import RecycleImage from "../assets/media/images/Recycle.ico";
import ExplorerImage from "../assets/media/images/Explorer.ico";
import { activeFolder } from "../store/FolderActiveSlice";

const FooterDiv = styled.div`
    display: flex;
    align-items: center;
`;
const Folder = styled.div`
    height: 23px;
    display: flex;
`;

export default function StartLine({ isShowFolder }) {
    const store = useSelector((folder) => folder);

    const sortedFolder = [...store.folder];

    const dispatch = useDispatch();
    const [
        myCompCollaps,
        cvCollaps,
        contactCollaps,
        portfolioCollaps,
        aboutCollaps,
    ] = [
        store.folder[0].collaps,
        store.folder[1].collaps,
        store.folder[2].collaps,
        store.folder[3].collaps,
        store.folder[4].collaps,
    ];
    function dispatchCollaps(status, name) {
        return function () {
            status
                ? dispatch(uncollapsFolder(name))
                : dispatch(collapsFolder(name));
        };
    }

    const collapsMyComp = dispatchCollaps(myCompCollaps, "myComputer");
    const collapsCV = dispatchCollaps(cvCollaps, "cv");
    const collapsContact = dispatchCollaps(contactCollaps, "contacts");
    const collapsPortfolio = dispatchCollaps(portfolioCollaps, "portfolio");
    const collapsAbout = dispatchCollaps(aboutCollaps, "about");

    return (
        <div className="footer-line">
            <StartWindow show={isShowFolder} />
            <div className="footer">
                <FooterDiv>
                    <StartButton isShowFolder={isShowFolder} />
                    {sortedFolder
                        .sort((a, b) => a.status - b.status)
                        ?.map((item, id) => {
                            if (item.status) {
                                switch (item.name) {
                                    case "myComputer":
                                        return (
                                            <Folder
                                                key={id + item}
                                                onClick={collapsMyComp}
                                            >
                                                <OpenedFolder
                                                    foldersName={
                                                        "Мой компьютер"
                                                    }
                                                    collaps={myCompCollaps}
                                                    image={MyComputerImage}
                                                />
                                            </Folder>
                                        );

                                    case "cv":
                                        return (
                                            <Folder
                                                key={id + item}
                                                onClick={collapsCV}
                                            >
                                                <OpenedFolder
                                                    foldersName={"Резюме"}
                                                    collaps={cvCollaps}
                                                    image={CVImage}
                                                />
                                            </Folder>
                                        );
                                    case "contacts":
                                        return (
                                            <Folder
                                                key={id + item}
                                                onClick={collapsContact}
                                            >
                                                <OpenedFolder
                                                    foldersName={"Контакты"}
                                                    collaps={contactCollaps}
                                                    image={ExplorerImage}
                                                />
                                            </Folder>
                                        );
                                    case "portfolio":
                                        return (
                                            <Folder
                                                key={id + item}
                                                onClick={collapsPortfolio}
                                            >
                                                <OpenedFolder
                                                    foldersName={"Портфолио"}
                                                    collaps={portfolioCollaps}
                                                    image={ExplorerImage}
                                                />
                                            </Folder>
                                        );
                                    case "about":
                                        return (
                                            <Folder
                                                key={id + item}
                                                onClick={collapsAbout}
                                            >
                                                <OpenedFolder
                                                    foldersName={"Обо мне"}
                                                    collaps={aboutCollaps}
                                                    image={ExplorerImage}
                                                />
                                            </Folder>
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
