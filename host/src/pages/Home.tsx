
// @ts-ignore
import NavBarComponent from 'NavBarComponent/NavBarComponent'

import React, { Suspense } from 'react';

const RemoteCounter = React.lazy(() =>
    // @ts-ignore
    import('CounterComponent/Counter').catch(() => {
        return { default: () => <h2>Counter unavailable!</h2> };
    })
);

function Home() {
    return (
        <div>
            <NavBarComponent />
            <Suspense fallback={<h2>Loading...</h2>}>
                <RemoteCounter />
            </Suspense>
        </div>
    );
}

export default Home;