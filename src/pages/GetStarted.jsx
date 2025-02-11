import { GetStarted as QuestGetStarted } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuestGetStarted
          questId={questConfig.GET_STARTED_QUESTID}
          uniqueUserId={localStorage.getItem('userId') || questConfig.USER_ID}
          accent={questConfig.PRIMARY_COLOR}
        >
          <QuestGetStarted.Header />
          <QuestGetStarted.Progress />
          <QuestGetStarted.Content />
          <QuestGetStarted.Footer />
        </QuestGetStarted>
      </div>
    </div>
  );
}