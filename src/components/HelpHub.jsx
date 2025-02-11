import { HelpHub as QuestHelpHub } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';

export default function HelpHub() {
  return (
    <QuestHelpHub
      uniqueUserId={localStorage.getItem('userId') || questConfig.USER_ID}
      questId={questConfig.HELP_HUB_QUESTID}
      accent={questConfig.PRIMARY_COLOR}
    />
  );
}