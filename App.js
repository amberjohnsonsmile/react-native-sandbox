import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectoinHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});


// FLATLIST
// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return(
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// });


// SCROLLVIEW
// import React, { Component } from 'react';
// import { ScrollView, Image, Text, } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     return(
//       <ScrollView>
//         <Text style={{fontSize:96}}>Scroll me plz</Text>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Text style={{fontSize:96}}>If you like</Text>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Text style={{fontSize:96}}>Scrolling down</Text>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Text style={{fontSize:96}}>What's the best</Text>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Text style={{fontSize:96}}>Framework around?</Text>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Image source={{uri: 'http://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png'}} style={{height: 200, width: 200}}/>
//         <Text style={{fontSize:80}}>React Native</Text>
//       </ScrollView>
//     );
//   }
// }


// TOUCHABLE COMPONENTS
// import React, { Component } from 'react';
// import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//           onPress={this._onPressButton}
//           background={Platform.OS === 'android' ? TouchableNativeFeedback
//             .SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//           onPress={this._onPressButton}
//           >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })


// BUTTONS
// import React, { Component } from 'react';
// import { Alert, Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841583"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })


// TEXT INPUT
// import React, { Component } from 'react';
// import { Alert, Button, Text, TextInput, View } from 'react-native';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class AlignItemsBasic extends Component {
//   render() {
//     return (
//       // Try setting `alignItems` to 'flex-start'
//       // Try setting `justifyContent` to `flex-end`
//       // Try setting `flexDirection` to `row`
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// JUSTIFY CONTENT
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`
//       // Try setting `flexDirection` to `row`
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// FLEXDIRECTION
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`
//       <View style={{flex:1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// FLEX SIZING
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 8, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 1, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// FIXED SIZING
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FixedDimensionsBasic extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// STYLING
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>big blue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });


// SETTING STATE
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText }
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML?' />
//         <Blink text='Look at me' />
//       </View>
//     );
//   }
// }

// EXAMPLE OF THIS.PROPS
// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }


// STATIC PAGE WITH PHOTO
// import React from 'react';
// import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Martini_glass_icon.svg/2000px-Martini_glass_icon.svg.png'
//     };
//     return (
//       <View style={styles.container}>
//       <Image source={pic} style={{width: 135, height: 200}}/>
//         <Text>Welcome to Drinkify!</Text>
//         <Text>Increase awareness, increase health.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
