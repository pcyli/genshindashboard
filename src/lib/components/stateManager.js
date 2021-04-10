import { useState, useEffect } from 'react';
import config from '../data/config.json';

export default function StateManager() {
    const { defaultState } = config;

    const getUserConfig = () => userConfig;

    const setSavedUserConfig = (config) => {
        localStorage.setItem('config', JSON.stringify(config));
    }

    const updateUserConfig = (newValue) => {
        let updatedUserConfig = {...userConfig, ...newValue};
        setUserConfigState(updatedUserConfig);
    }

    const getSavedUserConfig = () => {
        return JSON.parse(localStorage.getItem('config'));
    }

    const loadUserConfig = () => {
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
    }, [userConfig]);

    return {
        getUserConfig,
        loadUserConfig,
        updateUserConfig
    }
}