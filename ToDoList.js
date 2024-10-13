import { Text, View } from 'react-native';

function ToDoList({ tasks }) {
    return (
        <View>
            {
                tasks.map((task, idx) => (
                    <Text key={idx}>{task}</Text>
                ))
            }
        </View>
    )
}

export default ToDoList