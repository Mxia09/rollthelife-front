import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
background-color:#222;
color: #fff;
padding: 50px 0;
`;

const Title = styled.h1`
margin:0;
font-weight:normal
`;

const Description = styled.p`
color:#aaa;
font-size:.8rem;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: .8fr 1.2fr;
gap: 40px;
img{
    max-width: 100%
};
`;

const Column = styled.div`
display: flex;
align-items: center;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                    <div>
                        <Title>Pro Anywhere</Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Leo urna molestie at elementum. Massa placerat duis ultricies lacus sed. Sit amet consectetur adipiscing elit ut aliquam purus sit. Duis convallis convallis tellus id interdum velit laoreet. Duis at tellus at urna condimentum. Aliquam ut porttitor leo a diam. Tortor dignissim convallis aenean et tortor at risus. Molestie nunc non blandit massa enim.
                        </Description>
                        <button>Learn more</button>
                        <button>Add to cart</button>
                    </div>
                    </Column>
                    <Column>
                        <img src="https://rollthelife.s3.amazonaws.com/1710128083187-PNG" alt=""/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}