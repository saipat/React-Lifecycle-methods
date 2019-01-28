import React, { Component } from 'react';
import styled from 'styled-components';

export default function loggigy(Wrapped) {
    return class extends Component {
        render(){
            return (
                <LoggerContainer>
                    <h2>
                        {Wrapped.displayName} is now loggified:
                    </h2>
                    <Wrapped {...this.props} />
                </LoggerContainer>
            );
        }
    }
}

//template literal with css rules
const LoggerContainer = styled.div `
  background-color: aliceblue;
  border: 2px grooved aquamarine;
  border-radius: 5px;
`

LoggerContainer.displayName = "LoggerContainer"

const H2 = styled.h2 `
  color: blueviolet;
`

H2.displayName = "H2"