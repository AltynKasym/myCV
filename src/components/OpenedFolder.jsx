import styled from "styled-components";

const Folder = styled.span`
    margin: 0 2px;
    padding: 0 10px;
    font-weight: 400;
    max-width: 150px;
    height: 23px;
    color: #000;
    cursor: default;
`;
export default function OpenedFolder({ foldersName }) {
    return <Folder className={"press-btn-start"}>{foldersName}</Folder>;
}
