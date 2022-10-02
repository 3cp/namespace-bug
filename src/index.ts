import * as Foo from './foo';

export function bar(input: Foo.Foo1): Foo.Foo2 {
    return {
        name: input.name
    };
}
