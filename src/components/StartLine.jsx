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

const FooterDiv = styled.div`
    display: flex;
    align-items: center;
`;
const Folder = styled.div`
    height: 23px;
    display: flex;
`;

export default function StartLine() {
    const [isShowFolder, setIsShowFolder] = useState(false);
    const showFolder = () => {
        setIsShowFolder((prev) => !prev);
    };
    const folder = useSelector((folder) => folder);

    const sortedFolder = [...folder];

    const dispatch = useDispatch();
    const [myCompCollaps, cvCollaps, contactCollaps] = [
        folder[0].collaps,
        folder[1].collaps,
        folder[2].collaps,
    ];
    const collapsContact = () => {
        contactCollaps
            ? dispatch(uncollapsFolder("contacts"))
            : dispatch(collapsFolder("contacts"));
    };
    const collapsCV = () => {
        cvCollaps
            ? dispatch(uncollapsFolder("cv"))
            : dispatch(collapsFolder("cv"));
    };
    const collapsMyComp = () => {
        myCompCollaps
            ? dispatch(uncollapsFolder("MyComputer"))
            : dispatch(collapsFolder("MyComputer"));
    };

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
                                }
                            }
                        })}
                </FooterDiv>
                <StartClock />
            </div>
        </div>
    );
}
