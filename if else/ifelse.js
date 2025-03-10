const traffic = 'green'

if (traffic === 'red') {
    console.log('do not goo');
    
} else if (traffic === 'yellow') {
    console.log('wait');
    
} else if (traffic === 'green') {
    console.log('go');
}

switch (traffic) {
    case 'green':
        console.log('go');
        
        break;

    case 'yellow':
        console.log('wait');
        break;
        case 'red':
            console.log('do not goo');
            break;

}