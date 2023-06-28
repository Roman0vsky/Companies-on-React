import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  column-gap: 10px;
  font-size: 1.1rem;
  padding: 2.75em 0;
  width: 23.5%;
  box-shadow: 0px 4px 4px 0px #00000040;
  transition: 0.2s linear;
  background-color: #fdfdfd;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px 2px #4c7bff;
  }

  @media (max-width: 1303px) {
    & {
      width: 31.7%;
    }
  }

  @media (max-width: 960px) {
    & {
      width: 31.5%;
    }
  }

  @media (max-width: 856px) {
    & {
      width: 31.28%;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 48%;
      padding: 3.5em 0;
    }
  }

  @media (max-width: 587px) {
    & {
      width: 47.7%;
    }
  }

  @media (max-width: 510px) {
    & {
      width: 47.5%;
      padding: 3.25em 0;
    }
  }

  @media (max-width: 510px) {
    & {
      width: 47.2%;
    }
  }

  @media (max-width: 419px) {
    & {
      width: 47%;
      padding: 3em 0;
    }
  }

  @media (max-width: 391px) {
    & {
      width: 46.8%;
    }
  }

  @media (max-width: 367px) {
    & {
      width: 46.5%;
    }
  }

  @media (max-width: 335px) {
    & {
      width: 46.3%;
    }
  }
`;

export const SvgWrapper = styled.div`
  position: relative;
  top: -1px;
  width: 36px;
  height: 36px;

  @media (max-width: 510px) {
    & {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  margin: 0;

  &::first-letter {
    text-transform: capitalize;
  }

  @media (max-width: 1303px) {
    & {
      font-size: 1.25rem;
    }
  }
`;
