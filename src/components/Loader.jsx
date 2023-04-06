import React from 'react'
import { BarLoader } from 'react-spinners'

const Loader = () => {
    const override = { width: '200px', position: 'absolute', top: 'calc(50% - 2px)', left: 'calc(50% - 100px)' }
    return <BarLoader color='hsl(200, 20%, 20%)' cssOverride={override} />
}

export default Loader
