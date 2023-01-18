import styled from "styled-components";

const Folder = styled.span`
    margin: 0 2px;
    padding: 0 7px 0 5px;
    font-weight: 400;
    max-width: 150px;
    min-width: 50px;
    color: #000;
    cursor: default;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    height: 15px;
    padding-right: 5px;
    display: flex;
    align-items: center;
`;
const FoldersName = styled.p`
    white-space: nowrap;
    overflow: hidden;
`;
export default function OpenedFolder({ foldersName, collaps, image }) {
    return (
        <Folder className={collaps ? "press-btn-start" : "press-btn-push"}>
            <Wrapper>
                <Image src={image} />
                <FoldersName>{foldersName}</FoldersName>
            </Wrapper>
        </Folder>
    );
}
