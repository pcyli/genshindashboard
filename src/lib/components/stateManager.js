export default function StateTools () {
    let getUserConfig = () => {
        return JSON.parse(localStorage.getItem('config'));
    }

    let setUserConfig = (config) => {
        localStorage.setItem('config', JSON.stringify(config));
    }

    let updateUserConfig = (reactHandler, oldValues, newValue) => {
        let updatedUserConfig = {...oldValues, ...newValue};

        reactHandler(updatedUserConfig);
    }

    let loadUserConfig = () => {
        let storedUserConfig = getUserConfig();

        if (storedUserConfig) {
            return storedUserConfig;
        } else {
            return {
                trackedCharacters: [],
                transformerDay: ''
            };
        }
    }

    return {
        getUserConfig : getUserConfig,
        setUserConfig : setUserConfig,
        loadUserConfig : loadUserConfig,
        updateUserConfig : updateUserConfig
    }
}