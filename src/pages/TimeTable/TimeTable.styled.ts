import styled from "styled-components";

const Notice = styled.div`
  padding-bottom: 50px;
  p {
    text-align: center;
    font-size: 1.6rem;
    word-break: keep-all;
    @media screen and (max-width: 374px) {
      br.responsive {
        display: none;
      }
    }

    strong {
      font-weight: 700;
      font-size: 1.6rem;
      color: ${(p) => p.theme.colors.deep_green};
    }
  }
`;

const Table = styled.div`
  h1 {
    color: ${(p) => p.theme.colors.default};
  }

  table {
    width: 100%;
    border-top: 2px solid ${(p) => p.theme.colors.default};
    border-bottom: 2px solid ${(p) => p.theme.colors.default};
    margin-bottom: 15px;
    thead {
      tr {
        height: 36px;
        border-bottom: 1px solid ${(p) => p.theme.colors.gold_text};
        th {
          vertical-align: middle;
          transform: translateY(2px);
          text-align: center;
        }
      }
    }
    tbody {
      tr {
        height: 44px;
        &:not(:last-of-type) {
          border-bottom: 1px solid ${(p) => p.theme.colors.gold_text};
        }
        td {
          vertical-align: middle;
          text-align: center;
          &:first-of-type {
            font-weight: 500;
          }
        }
      }
    }
  }
  p {
    display: flex;
    align-items: first baseline;
    font-size: 1.3rem;
    color: ${(p) => p.theme.colors.gold_text};
    &:before {
      content: "*";
      display: block;
      color: inherit;
      width: 3px;
      margin-right: 6px;

      transform: translateY(2.5px);
    }
  }
`;

export const PS = {
  Notice,
  Table,
};
