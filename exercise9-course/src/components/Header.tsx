import React from "react";

const Header: React.FunctionComponent<{courseName: string}> = (props) => {
    const {courseName} = props;
    return (
        <div>
            <h1>
                {courseName}
            </h1>
        </div>
    )
}
export default Header;
