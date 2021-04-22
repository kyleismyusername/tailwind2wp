module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        './*.php',
        './templates/**/*.php',
        './build/js/**/*.js',
    ],
    theme: {
        typography: {
            DEFAULT: {
                css: {
                    maxWidth: 'auto',
                    fontSize: '1rem',
                    color: '#4a4a4a',
                    a: {
                        color: '#159D99',
                        textDecoration: 'none',
                        fontWeight: '600',
                        '&:hover': {
                            color: '#4a4a4a',
                        },
                    },
                    h1: {
                        color: '#4a4a4a',
                        fontWeight: '400',
                        fontSize: '1.875rem'
                    },
                    h2: {
                        color: '#4a4a4a',
                        fontWeight: '400',
                        fontSize: '1.5rem'
                    },
                    h3: {
                        color: '#4a4a4a'
                    },
                    h4: {
                        color: '#4a4a4a'
                    },
                    h5: {
                        color: '#4a4a4a'
                    },
                    h6: {
                        color: '#4a4a4a'
                    },
                    pre: {
                        backgroundColor: '#3f3e3b',
                        color: '#ffffff',
                    },
                    ul: {
                        li: ['before']
                    },
                    strong: {
                        color: 'inherit'
                    }
                },
            },
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                // sm: "400px",
                md: "648px",
                lg: "1024px",
                xl: "1204px"
            }
        },
        extend: {
            colors: {
                link: {
                    'default': '#3182ce',
                    'hover': '#63b3ed',
                }
            },
            fontSize: {
                xxs: '0.675rem',
            },
            lineHeight: {
                tighter: '1.125',
            },
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({ addUtilities }) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        },
        require('@tailwindcss/typography'),
    ]
};
