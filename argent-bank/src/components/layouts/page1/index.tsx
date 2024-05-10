import React from 'react'

const Page1 = ({left, main}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            width: "calc(100% - 2rem)",
            height: "calc(100% - 2rem)",
            margin: "1rem",
            border: "1px solid red",
            borderRadius: "20px",
            overflow: "hidden",
        }}>
            <div
                style={{
                    width: "250px",
                    padding: "1rem",
                    backgroundColor: "#ccc",
                    borderRight: "1px solid #e0e0e0",
                }}
            >
                {left}
            </div>
            <div
                style={{
                    padding: "1rem",
                    flex: 1,
                }}
            >
                {main}
            </div>
        </div>
    )
}

export default Page1