
const useTheme = () =>{

    let theme = 'light';

    const toggleTheme = () => {
       theme = theme==='light'?'dark':'light';
       const backgroundImage = `var(--background-image-${theme})`;
       const fontColor = `var(--font-color-${theme})`;
       const backgroundColor = `var(--background-color-${theme})`;
       const borderGradient = `var(--border-gradient-${theme})`;
       const mozGradient = `var(--moz-border-gradient-${theme})`;
       const webkitGradient = `var(--webkit-border-gradient-${theme})`;
       const catBackground = `var(--cat-background-${theme})`;
       const cartBorder = `var(--cart-border-${theme})`;
       const cartBorderActive = `var(--cart-border-active-${theme})`

       document.body.style.setProperty('--background-image',backgroundImage);
       document.body.style.setProperty('--font-color',fontColor);
       document.body.style.setProperty('--background-color',backgroundColor);
       document.body.style.setProperty('--border-gradient',borderGradient);
       document.body.style.setProperty('--webkit-border-gradient',webkitGradient);
       document.body.style.setProperty('--moz-border-gradient',mozGradient);
       document.body.style.setProperty('--cat-background',catBackground);
       document.body.style.setProperty('--cart-border',cartBorder);
       document.body.style.setProperty('--cart-border-active',cartBorderActive);

 }

    return toggleTheme

}

export {
    useTheme
}