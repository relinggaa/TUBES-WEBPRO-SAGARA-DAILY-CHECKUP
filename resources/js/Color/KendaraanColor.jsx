/**
 * Helper functions untuk theme color pada Kendaraan page
 * @param {Object} currentTheme - Theme object dari ThemeContext
 */

export const getThemeBorder = (currentTheme, opacity = '20') => {
    const colorMap = {
        purple: `border-purple-500/${opacity}`,
        red: `border-red-500/${opacity}`,
        blue: `border-blue-500/${opacity}`,
        green: `border-green-500/${opacity}`,
        yellow: `border-yellow-500/${opacity}`,
    };
    return colorMap[currentTheme.primary] || colorMap.purple;
};

export const getThemeBorderHover = (currentTheme, opacity = '30') => {
    const colorMap = {
        purple: `hover:border-purple-500/${opacity}`,
        red: `hover:border-red-500/${opacity}`,
        blue: `hover:border-blue-500/${opacity}`,
        green: `hover:border-green-500/${opacity}`,
        yellow: `hover:border-yellow-500/${opacity}`,
    };
    return colorMap[currentTheme.primary] || colorMap.purple;
};

export const getThemeShadow = (currentTheme, opacity = '10') => {
    const colorMap = {
        purple: `shadow-purple-500/${opacity}`,
        red: `shadow-red-500/${opacity}`,
        blue: `shadow-blue-500/${opacity}`,
        green: `shadow-green-500/${opacity}`,
        yellow: `shadow-yellow-500/${opacity}`,
    };
    return colorMap[currentTheme.primary] || colorMap.purple;
};

export const getThemeShadowHover = (currentTheme, opacity = '20') => {
    const colorMap = {
        purple: `hover:shadow-purple-500/${opacity}`,
        red: `hover:shadow-red-500/${opacity}`,
        blue: `hover:shadow-blue-500/${opacity}`,
        green: `hover:shadow-green-500/${opacity}`,
        yellow: `hover:shadow-yellow-500/${opacity}`,
    };
    return colorMap[currentTheme.primary] || colorMap.purple;
};

export const getThemeBg = (currentTheme, opacity = '20') => {
    const colorMap = {
        purple: `bg-purple-500/${opacity}`,
        red: `bg-red-500/${opacity}`,
        blue: `bg-blue-500/${opacity}`,
        green: `bg-green-500/${opacity}`,
        yellow: `bg-yellow-500/${opacity}`,
    };
    return colorMap[currentTheme.primary] || colorMap.purple;
};

export const getThemeGradient = (currentTheme, type = 'from', shade = '500', opacity = '20') => {
    const colorMap = {
        purple: {
            from: `from-purple-${shade}/${opacity}`,
            via: `via-purple-${shade}/${opacity}`,
            to: `to-purple-${shade}/${opacity}`,
        },
        red: {
            from: `from-red-${shade}/${opacity}`,
            via: `via-red-${shade}/${opacity}`,
            to: `to-red-${shade}/${opacity}`,
        },
        blue: {
            from: `from-blue-${shade}/${opacity}`,
            via: `via-blue-${shade}/${opacity}`,
            to: `to-blue-${shade}/${opacity}`,
        },
        green: {
            from: `from-green-${shade}/${opacity}`,
            via: `via-green-${shade}/${opacity}`,
            to: `to-green-${shade}/${opacity}`,
        },
        yellow: {
            from: `from-yellow-${shade}/${opacity}`,
            via: `via-yellow-${shade}/${opacity}`,
            to: `to-yellow-${shade}/${opacity}`,
        },
    };
    const theme = colorMap[currentTheme.primary] || colorMap.purple;
    return theme[type] || theme.from;
};
