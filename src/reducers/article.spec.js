const state = {
    rootHistory: {
        action: "POP",
        block: block(),
        createHref: createHref(location),
        go: go(n),
        goBack: goBack(),
        goForward: goForward(),
        length: 19,
        listen: listen(listener),
        location: {
            pathname: "/article",
            search: "",
            hash: "",
            state: {},
            key: "0hmkd9"
        },
        push: push(path, state),
        replace: replace(path, state)
    },
    selectSubreddit: 'evaluation',
    postsBySubreddit: {
        evaluation: {
            isFetching: true,
            page: 0,
            didInvalidate: false,
            items: [
                {
                    id: 42,
                    title: 'Confusion about Flux and Relay',
                    detail: '',
                    img: ''
                },
                {
                    id: 500,
                    title: 'Creating a Simple Application Using React JS and Flux Architecture',
                    detail: '',
                    img: ''
                }
            ]
        },
        news: {
            isFetching: false,
            page: 0,
            didInvalidate: false,
            lastUpdated: 1439478405547,
            items: [
                {
                    id: 42,
                    title: 'Confusion about Flux and Relay'
                },
                {
                    id: 500,
                    title: 'Creating a Simple Application Using React JS and Flux Architecture'
                }
            ]
        },
        video: {

        }
    }
};
