export const formatDataForChart = (subscriptionData) => {
    if(subscriptionData.length === 0) {
        return [{name: '0', orange: 0, blue: 0, black: 0}]
    }
    else {
        const gameStartTime = subscriptionData[0].timestamp
        const filteredObject = subscriptionData.filter((dataItem) =>
            dataItem.timestamp !== gameStartTime
        ).map((dataItem) => {
            const timeLabel = (dataItem.timestamp - gameStartTime)/1000
            return {timestamp: timeLabel, type: dataItem.type}
        }).reduce((accumulatedObj, currentElem) => {
            const {timestamp, type} = currentElem
            let clickData = {orange: 0, blue: 0}
            if(timestamp in accumulatedObj) {
                clickData = accumulatedObj[timestamp]
            }

            clickData[type] += 1
            const { orange, blue } = clickData
            const black = computeBlackClickCount(orange,blue)

            accumulatedObj[timestamp] = {orange, blue, black}

            return accumulatedObj
        },{0: {orange: 0, blue: 0, black: 0}})

        return Object.entries(filteredObject).map((currentElem) => {
            return({name: currentElem[0], ...currentElem[1]})
        })
    }
}

const computeBlackClickCount = (orangeClickCount, blueClickCount) => {
    return blueClickCount - orangeClickCount
}