export const calorieFormula = {
    "Row": {
        "Running": (a) => a * 10 + " m",
        "Ski-Erg": (a) => a * 1 + " cal",
        "Assault Bike": (a) => a * 0.7 + " cal",
    },
    "Ski-Erg": {
        "Running": (a) => Math.floor(a * 10) + " m",
        "Row": (a) => a * 1 + " cal",
        "Assault Bike": (a) => Math.floor(a * 0.7) + " cal",
    },
    "Running": {
        "Ski-Erg": (a) => Math.floor((a / 10) * 1) + " cal",
        "Row": (a) => (a / 10) * 1 + " cal",
        "Assault Bike": (a) => (a / 10) * 0.7 + " cal",
    }
}

export const meterFormula = {
    "Row": {
        "Running": (a) => a * 0.8 + " m",
        "Ski-Erg": (a) => a * 1 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.06) + " cal",
    },
    "Ski-Erg": {
        "Running": (a) => Math.ceil(a * 0.8) + " m",
        "Row": (a) => a * 1 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.06) + " cal",
    },
    "Running": {
        "Ski-Erg": (a) => Math.ceil(a * 1.25) + " m",
        "Row": (a) => a * 1.25 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.07) + " cal",
    }
}


export const selectData = ["Row", "Assault Bike", "Ski-Erg", "Running"]
