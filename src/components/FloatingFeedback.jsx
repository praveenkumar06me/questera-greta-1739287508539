import { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';
import { FaComments } from 'react-icons/fa';

export default function FloatingFeedback() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700 transition-colors z-50 flex items-center gap-2"
      >
        <FaComments className="text-xl" />
        <span>Feedback</span>
      </button>

      <FeedbackWorkflow
        uniqueUserId={localStorage.getItem('userId') || questConfig.USER_ID}
        questId={questConfig.FEEDBACK_QUESTID}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        accent={questConfig.PRIMARY_COLOR}
      >
        <FeedbackWorkflow.ThankYou />
      </FeedbackWorkflow>
    </>
  );
}