import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const data = ["data1", "data2", "data3"]

export default function SaveScore() {
    const [firstNum, setFirstNum] = useState('')

    return (
        <div>
            <FormControl variant="outlined"  >
                <InputLabel >From</InputLabel>
                <Select
                    native
                    label="From"
                >
                    <option value="" />
                    {data.map((value, index) => <option key={index} value={value} >{value}</option>)}
                </Select>
                <TextField id="standard-basic" label="Time" />
            </FormControl>
        </div>
    )
}
