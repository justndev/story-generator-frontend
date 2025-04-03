class UtilityFunctions {
    extractBgVideoNameFromPath(path: string) {
        // @ts-ignore
        return path.split('/').pop().slice(0, -4);

    }
}

export const utilityFunctions = new UtilityFunctions();
