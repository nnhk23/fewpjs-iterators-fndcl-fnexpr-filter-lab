function findMatching(drivers, name) {
    return drivers.filter(driver => name.toLowerCase() == driver.toLowerCase()
    )
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(letter.toLowerCase()) == 0)
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}
