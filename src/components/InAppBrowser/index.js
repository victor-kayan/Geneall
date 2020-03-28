import InAppBrowser from 'react-native-inappbrowser-reborn';

import Colors from '../../../assets/colors';

export default async function openLink(url) {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // Android Properties
        showTitle: true,
        toolbarColor: Colors.PRIMARY_BLUE,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: Colors.PRIMARY_BLUE,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'overFullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: true,
        enableBarCollapsing: false,
      })
    }
  } catch (error) {
    alert(error.message)
  }
}