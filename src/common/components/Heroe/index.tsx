import HeroeC from './component';
import { THeroeC } from './types';

const HeroeV: React.FC<THeroeC> = ({ data }) => {
    return (
        <HeroeC data={data} />
    )
}

export default HeroeV