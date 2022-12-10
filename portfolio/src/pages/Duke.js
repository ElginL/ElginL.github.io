import DetailedWork from '../components/DetailedWork';
import { dukeDetails as details } from '../data/DukePage';

const Duke = () => {
    return (
        <DetailedWork
            workTitle={details.workTitle}
            windowImages={details.windowImages}
            siteLink={details.siteLink}
            codeLink={details.codeLink}
            description={details.description}
            learningPoints={details.learningPoints}
        />
    );
};

export default Duke;