A **linked list** is a linear data structure comprised of nodes that are connected to one another using pointers

Each node has the data it stores, and a pointer to the next node

For a link list of integers:

```
typedef struct _node {
	_node *next;
	int data;
} Node
```

The last pointer's `next` parameter points to NULL

The **head pointer** contains no data, and just points to the next (first) pointer in the list

# Linked List vs. Array

Linked list advantages:

- Size of list is not fixed
- Adding/removing elements is straightforward (no shifting)

Array advantages:
- Constant-time access to arbitrary element (don't have to start from beginning)
- Occupies less memory (no pointers)

# Linked List Operations

## `print`

```
function print(Node *node)
	
	while node is not null
		print node->data
		node = node->next
```

## `length`

```c
function length(Node *node)
	int count
	
	while node is not null
		increment count by 1
		node = node->next
	return count
```

## `append`

```c
function append(Node *list, new_data)
	
	// traverse to end of list
	while node is not null
		node = node->next
	
	new_node = new Node{data = new_data, next = null}
	node->next = new_node
```

## `add_after`

```c
function append(Node *after, new_data)
	
	new_node = new Node{data = new_data, next = null}
	Node *temp = after->next
	after->next = new_node
	new_node->next = temp
```

## `clear`

```c
function clear(Node* list)
	if list->next is not null
		clear(list)
	free list
	set list to null
```

## `add_front`

```
function add_front(Node** list, new_data)
	new_node = new Node{data = new_data, next = *list}
	*list = new_node
```

## `remove_front`

```
function remove_front(Node** list)
	remove = *list
	*list = (*list)->next
	free remove
```

