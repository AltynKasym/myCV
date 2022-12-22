import styled from "styled-components";
import Close from "../assets/media/images/close.jpg";
import Error from "../assets/media/images/error.png";
import OkButton from "../assets/media/images/OkButton.jpg";

const Window = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px outset #d2d3d5;
    color: #000;
    background-color: #c0c0c0;
    width: 350px;
    z-index: 5;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000080;
    padding: 3px 3px 3px 5px;
    /* margin: 3px; */
`;
const Title = styled.div`
    margin: 2px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.05rem;
`;
const Body = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 15px 10px;
`;

const Text = styled.p`
    font-size: 0.8rem;
    line-height: 1.1rem;
`;
const Button = styled.img`
    width: 90px;
    padding-bottom: 5px;
`;

const Footer = styled.div`
    text-align: center;
`;
export default function Message({ closeWindow, messageText }) {
    return (
        <div>
            <Window>
                <Header>
                    <Title>Вставьте Диск</Title>
                    <img
                        src={Close}
                        className="window__btn"
                        onClick={() => closeWindow(false)}
                    />
                </Header>
                <Body>
                    <img src={Error} alt="" />
                    <Text>{messageText}</Text>
                </Body>
                <Footer onClick={() => closeWindow(false)}>
                    <Button src={OkButton} />
                </Footer>
            </Window>
        </div>
    );
}
