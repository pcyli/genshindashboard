import { useState, useEffect } from 'react';
import config from '../data/config.json';

export default function StateManager() {
    let { defaultState } = config;

    let getUserConfig = () => userConfig;

    let setSavedUserConfig = (config) => {
        localStorage.setItem('config', JSON.stringify(config));
    }

    let updateUserConfig = (newValue) => {
        let updatedUserConfig = {...userConfig, ...newValue};
        setUserConfigState(updatedUserConfig);
    }

    let getSavedUserConfig = () => {
        return JSON.parse(localStorage.getItem('config'));
    }

    let loadUserConfig = () => {
        let storedUserConfig = getSavedUserConfig();

        if (storedUserConfig) {
            return storedUserConfig;
        } else {
            return defaultState;
        }
    }

    const [userConfig, setUserConfigState] = useState(loadUserConfig());

    useEffect(() => {
        setSavedUserConfig(userConfig);
    }, [userConfig])

    return {
        getUserConfig,
        loadUserConfig,
        updateUserConfig
    }
}