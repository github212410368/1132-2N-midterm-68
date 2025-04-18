import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
    width: 90vw;
    max-width: var(--fixed-width);
    margin: 5rem auto;
  }
  .loading {
    text-align: center;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }

  .single-tour {
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 2rem 0;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }
  .single-tour:hover {
    box-shadow: var(--dark-shadow);
  }
  .single-tour img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  .tour-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .tour-info h4 {
    margin-bottom: 0;
  }
  .single-tour button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--clr-primary-5);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
  }
  .tour-price {
    color: var(--clr-primary-5);
    background: var(--clr-primary-10);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .single-tour footer {
    padding: 1.5rem 2rem;
  }
  .single-tour .delete-btn {
    display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: var(--clr-red-dark);
    letter-spacing: var(--spacing);
    background: transparent;
    border: 1px solid var(--clr-red-dark);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
`;

export default Wrapper;
