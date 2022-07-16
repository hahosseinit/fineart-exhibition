import React from "react";

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// HOC (withSpinner) is a higher order component that takes some component that we want to wrapped some functionality of the

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
}
 return Spinner;
};

export default WithSpinner;