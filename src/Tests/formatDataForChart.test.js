import {formatDataForChart} from "../Utils/formatDataForChart";

test('returns initialData if no subscription data', () => {
    const subscriptionData = []
    expect(formatDataForChart(subscriptionData)).toStrictEqual([{name: '0', orange: 0, blue: 0, black: 0}])
})

test(`returns initialData if only 1 click`, () => {
    const subscriptionData = [
        {timestamp: "1575874857666", type: "blue"}
    ]

    expect(formatDataForChart(subscriptionData)).toStrictEqual([{name: '0', orange: 0, blue: 0, black: 0},])
})

test(`returns initialData if multiple clicks but all coincide with the timestamp of the click that started the game`, () => {
    const subscriptionData = [
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857666", type: "orange"},
    ]
    expect(formatDataForChart(subscriptionData)).toStrictEqual([{name: '0', orange: 0, blue: 0, black: 0}])
})

test('merges items with the same timestamp', () => {
    const subscriptionData = [
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857669", type: "blue"},
        {timestamp: "1575874857669", type: "blue"},
    ]
    expect(formatDataForChart(subscriptionData)).toStrictEqual(
        [
            {name: '0', orange: 0, blue: 0, black: 0},
            {name: '0.003', orange: 0, blue: 2, black: 2}
        ]
    )
})

test(`gives back the data in the appropriate format`, () => {
    const subscriptionData = [
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857666", type: "blue"},
        {timestamp: "1575874857666", type: "orange"},
        {timestamp: "1575874857670", type: "blue"},
        {timestamp: "1575874857698", type: "orange"},
        {timestamp: "1575874857700", type: "blue"},
    ]

    expect(formatDataForChart(subscriptionData))
        .toStrictEqual(
            [
                {name: '0', orange: 0, blue: 0, black: 0},
                {name: '0.004', orange: 0, blue: 1, black: 1},
                {name: '0.032', orange: 1, blue: 0, black: -1},
                {name: '0.034', orange: 0, blue: 1, black: 1},
            ]
        )
})