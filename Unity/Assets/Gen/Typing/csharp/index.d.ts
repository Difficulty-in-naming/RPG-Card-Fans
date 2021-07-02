
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace System {
        
        class Byte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection{
            
            public get LongLength(): bigint;
            
            
            public get IsFixedSize(): boolean;
            
            
            public get IsReadOnly(): boolean;
            
            
            public get IsSynchronized(): boolean;
            
            
            public get SyncRoot(): any;
            
            
            public get Length(): number;
            
            
            public get Rank(): number;
            
            
            
            public static CreateInstance($elementType: System.Type, ...lengths: bigint[]):System.Array;
            
            public CopyTo($array: System.Array, $index: number):void;
            
            public Clone():any;
            
            public static BinarySearch($array: System.Array, $value: any):number;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint):void;
            
            public CopyTo($array: System.Array, $index: bigint):void;
            
            public GetLongLength($dimension: number):bigint;
            
            public GetValue($index: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint, $index3: bigint):any;
            
            public GetValue(...indices: bigint[]):any;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any):number;
            
            public static BinarySearch($array: System.Array, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static IndexOf($array: System.Array, $value: any):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static Reverse($array: System.Array):void;
            
            public static Reverse($array: System.Array, $index: number, $length: number):void;
            
            public SetValue($value: any, $index: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint, $index3: bigint):void;
            
            public SetValue($value: any, ...indices: bigint[]):void;
            
            public static Sort($array: System.Array):void;
            
            public static Sort($array: System.Array, $index: number, $length: number):void;
            
            public static Sort($array: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public GetEnumerator():System.Collections.IEnumerator;
            
            public GetLength($dimension: number):number;
            
            public GetLowerBound($dimension: number):number;
            
            public GetValue(...indices: number[]):any;
            
            public SetValue($value: any, ...indices: number[]):void;
            
            public GetUpperBound($dimension: number):number;
            
            public GetValue($index: number):any;
            
            public GetValue($index1: number, $index2: number):any;
            
            public GetValue($index1: number, $index2: number, $index3: number):any;
            
            public SetValue($value: any, $index: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number, $index3: number):void;
            
            public static CreateInstance($elementType: System.Type, $length: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number, $length3: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, ...lengths: number[]):System.Array;
            
            public static CreateInstance($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>):System.Array;
            
            public static Clear($array: System.Array, $index: number, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public static ConstrainedCopy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public Initialize():void;
            
        }
        
        
        class Object{
            
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public GetHashCode():number;
            
            public GetType():System.Type;
            
            public ToString():string;
            
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
            public constructor();
            
        }
        
        
        interface ICloneable{
            
            
        }
        
        
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        class ValueType extends System.Object{
            
            
        }
        
        
        interface IComparable{
            
            
        }
        
        
        interface IComparable$1<T>{
            
            
        }
        
        
        interface IConvertible{
            
            
        }
        
        
        interface IEquatable$1<T>{
            
            
        }
        
        
        interface IFormattable{
            
            
        }
        
        
        class Void extends System.ValueType{
            
            
        }
        
        
        class Single extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>{
            
            
        }
        
        
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>{
            
            
        }
        
        
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>{
            
            
        }
        
        
        interface IFormatProvider{
            
            
        }
        
        
        class Double extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        class Enum extends System.ValueType implements System.IComparable, System.IConvertible, System.IFormattable{
            
            
        }
        
        
        class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            public static FilterAttribute: System.Reflection.MemberFilter;
            public static FilterName: System.Reflection.MemberFilter;
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            public static Missing: any;
            public static Delimiter: number;
            public static EmptyTypes: System.Array$1<System.Type>;
            public get MemberType(): System.Reflection.MemberTypes;
            
            
            public get DeclaringType(): System.Type;
            
            
            public get DeclaringMethod(): System.Reflection.MethodBase;
            
            
            public get ReflectedType(): System.Type;
            
            
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            
            
            public get GUID(): System.Guid;
            
            
            public static get DefaultBinder(): System.Reflection.Binder;
            
            
            public get Module(): System.Reflection.Module;
            
            
            public get Assembly(): System.Reflection.Assembly;
            
            
            public get TypeHandle(): System.RuntimeTypeHandle;
            
            
            public get FullName(): string;
            
            
            public get Namespace(): string;
            
            
            public get AssemblyQualifiedName(): string;
            
            
            public get BaseType(): System.Type;
            
            
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            
            
            public get IsNested(): boolean;
            
            
            public get Attributes(): System.Reflection.TypeAttributes;
            
            
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            
            
            public get IsVisible(): boolean;
            
            
            public get IsNotPublic(): boolean;
            
            
            public get IsPublic(): boolean;
            
            
            public get IsNestedPublic(): boolean;
            
            
            public get IsNestedPrivate(): boolean;
            
            
            public get IsNestedFamily(): boolean;
            
            
            public get IsNestedAssembly(): boolean;
            
            
            public get IsNestedFamANDAssem(): boolean;
            
            
            public get IsNestedFamORAssem(): boolean;
            
            
            public get IsAutoLayout(): boolean;
            
            
            public get IsLayoutSequential(): boolean;
            
            
            public get IsExplicitLayout(): boolean;
            
            
            public get IsClass(): boolean;
            
            
            public get IsInterface(): boolean;
            
            
            public get IsValueType(): boolean;
            
            
            public get IsAbstract(): boolean;
            
            
            public get IsSealed(): boolean;
            
            
            public get IsEnum(): boolean;
            
            
            public get IsSpecialName(): boolean;
            
            
            public get IsImport(): boolean;
            
            
            public get IsSerializable(): boolean;
            
            
            public get IsAnsiClass(): boolean;
            
            
            public get IsUnicodeClass(): boolean;
            
            
            public get IsAutoClass(): boolean;
            
            
            public get IsArray(): boolean;
            
            
            public get IsGenericType(): boolean;
            
            
            public get IsGenericTypeDefinition(): boolean;
            
            
            public get IsConstructedGenericType(): boolean;
            
            
            public get IsGenericParameter(): boolean;
            
            
            public get GenericParameterPosition(): number;
            
            
            public get ContainsGenericParameters(): boolean;
            
            
            public get IsByRef(): boolean;
            
            
            public get IsPointer(): boolean;
            
            
            public get IsPrimitive(): boolean;
            
            
            public get IsCOMObject(): boolean;
            
            
            public get HasElementType(): boolean;
            
            
            public get IsContextful(): boolean;
            
            
            public get IsMarshalByRef(): boolean;
            
            
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            
            
            public get IsSecurityCritical(): boolean;
            
            
            public get IsSecuritySafeCritical(): boolean;
            
            
            public get IsSecurityTransparent(): boolean;
            
            
            public get UnderlyingSystemType(): System.Type;
            
            
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public MakePointerType():System.Type;
            
            public MakeByRefType():System.Type;
            
            public MakeArrayType():System.Type;
            
            public MakeArrayType($rank: number):System.Type;
            
            public static GetTypeFromProgID($progID: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeCode($type: System.Type):System.TypeCode;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            
            public GetArrayRank():number;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            
            public GetMethod($name: string):System.Reflection.MethodInfo;
            
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            
            public GetField($name: string):System.Reflection.FieldInfo;
            
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            
            public GetInterface($name: string):System.Type;
            
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            
            public GetInterfaces():System.Array$1<System.Type>;
            
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            
            public GetEvent($name: string):System.Reflection.EventInfo;
            
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetNestedTypes():System.Array$1<System.Type>;
            
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            
            public GetNestedType($name: string):System.Type;
            
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            
            public GetElementType():System.Type;
            
            public GetGenericArguments():System.Array$1<System.Type>;
            
            public GetGenericTypeDefinition():System.Type;
            
            public GetEnumNames():System.Array$1<string>;
            
            public GetEnumValues():System.Array;
            
            public GetEnumUnderlyingType():System.Type;
            
            public IsEnumDefined($value: any):boolean;
            
            public GetEnumName($value: any):string;
            
            public IsSubclassOf($c: System.Type):boolean;
            
            public IsInstanceOfType($o: any):boolean;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
            public IsEquivalentTo($other: System.Type):boolean;
            
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            
            public Equals($o: any):boolean;
            
            public Equals($o: System.Type):boolean;
            
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            
            public GetType():System.Type;
            
            public static GetType($typeName: string):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
        class UInt64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{
            
            
        }
        
        
        interface IDisposable{
            
            
        }
        
        
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable{
            
            public get Method(): System.Reflection.MethodInfo;
            
            
            public get Target(): any;
            
            
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean):Function;
            
            public DynamicInvoke(...args: any[]):any;
            
            public Clone():any;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
            public GetInvocationList():System.Array$1<Function>;
            
            public static Combine($a: Function, $b: Function):Function;
            
            public static Combine(...delegates: Function[]):Function;
            
            public static Remove($source: Function, $value: Function):Function;
            
            public static RemoveAll($source: Function, $value: Function):Function;
            
            public static op_Equality($d1: Function, $d2: Function):boolean;
            
            public static op_Inequality($d1: Function, $d2: Function):boolean;
            
        }
        
        
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        
        
        type Func$2<T, TResult> = (arg: T) => TResult;
        
        
        type Func$4<T1, T2, T3, TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        
        
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute{
            
            
        }
        
        
        class Guid extends System.ValueType implements System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.IFormattable{
            
            
        }
        
        
        enum TypeCode{ Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        
        
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class UInt32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        type Action$1<T> = (obj: T) => void;
        
        
        type Func$1<TResult> = () => TResult;
        
        
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
        
        class IntPtr extends System.ValueType implements System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class Uri extends System.Object implements System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class Int64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{
            
            
        }
        
        
        class UInt16 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
        class MarshalByRefObject extends System.Object{
            
            
        }
        
        
        class DateTime extends System.ValueType implements System.IComparable, System.IComparable$1<Date>, System.IConvertible, System.IEquatable$1<Date>, System.Runtime.Serialization.ISerializable, System.IFormattable{
            
            
        }
        
        
        type Converter$2<TInput, TOutput> = (input: TInput) => TOutput;
        
        
        type Comparison$1<T> = (x: T, y: T) => number;
        
        
        type Predicate$1<T> = (obj: T) => boolean;
        
        
        class Nullable$1<T> extends System.ValueType{
            
            
        }
        
        
        type Action$2<T1, T2> = (arg1: T1, arg2: T2) => void;
        
        
        class Int16 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{
            
            
        }
        
        
    }
    namespace System.Collections {
        
        interface IEnumerable{
            
            
        }
        
        
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection{
            
            
        }
        
        
        interface ICollection extends System.Collections.IEnumerable{
            
            
        }
        
        
        interface IStructuralComparable{
            
            
        }
        
        
        interface IStructuralEquatable{
            
            
        }
        
        
        interface IEnumerator{
            
            
        }
        
        
        interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection{
            
            
        }
        
        
        interface IComparer{
            
            
        }
        
        
    }
    namespace System.Collections.Generic {
        
        interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        interface IEnumerable$1<T> extends System.Collections.IEnumerable{
            
            
        }
        
        
        interface IReadOnlyCollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        interface IReadOnlyList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{
            
            
        }
        
        
        class KeyValuePair$2<TKey, TValue> extends System.ValueType{
            
            
        }
        
        
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{
            
            
        }
        
        
        interface IDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{
            
            
        }
        
        
        interface IComparer$1<T>{
            
            
        }
        
        
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable{
            
            
        }
        
        
    }
    namespace UnityEngine {
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable{
            
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;/** X component of the vector. */
            public x: number;/** Y component of the vector. */
            public y: number;/** Z component of the vector. */
            public z: number;/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector3;
            
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            
            /** Shorthand for writing Vector3(0, 0, 0). */
            public static get zero(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(1, 1, 1). */
            public static get one(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(0, 0, 1). */
            public static get forward(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(0, 0, -1). */
            public static get back(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(0, 1, 0). */
            public static get up(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(0, -1, 0). */
            public static get down(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(-1, 0, 0). */
            public static get left(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(1, 0, 0). */
            public static get right(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector3;
            
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector3;
            
            
            /** Spherically interpolates between two vectors. */
            public static Slerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Spherically interpolates between two vectors. */
            public static SlerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>):void;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>):void;
            /** Rotates a vector current towards target.
             * @param current The vector being managed.
             * @param target The vector.
             * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
             * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
             * @returns The location that RotateTowards generates. 
             */
            public static RotateTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number):UnityEngine.Vector3;
            /** Linearly interpolates between two points.
             * @param a Start value, returned when t = 0.
             * @param b End value, returned when t = 1.
             * @param t Value used to interpolate between a and b.
             * @returns Interpolated value, equals to a + (b - a) * t. 
             */
            public static Lerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
             * @param current The position to move from.
             * @param target The position to move towards.
             * @param maxDistanceDelta Distance to move current per call.
             * @returns The new position. 
             */
            public static MoveTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector3;
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Set x, y and z components of an existing Vector3. */
            public Set($newX: number, $newY: number, $newZ: number):void;
            /** Multiplies two vectors component-wise. */
            public static Scale($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale($scale: UnityEngine.Vector3):void;
            /** Cross Product of two vectors. */
            public static Cross($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Vector3):boolean;
            /** Reflects a vector off the plane defined by a normal. */
            public static Reflect($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Makes this vector have a magnitude of 1. */
            public static Normalize($value: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public Normalize():void;
            /** Dot Product of two vectors. */
            public static Dot($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):number;
            /** Projects a vector onto another vector. */
            public static Project($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
             * @param planeNormal The direction from the vector towards the plane.
             * @param vector The location of the vector above the plane.
             * @returns The location of the vector on the plane. 
             */
            public static ProjectOnPlane($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns the angle in degrees between from and to.
             * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @returns The angle in degrees between the two vectors. 
             */
            public static Angle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3):number;
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @param axis A vector around which the other vectors are rotated.
             */
            public static SignedAngle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3):number;
            /** Returns the distance between a and b. */
            public static Distance($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):number;
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude($vector: UnityEngine.Vector3, $maxLength: number):UnityEngine.Vector3;
            
            public static Magnitude($vector: UnityEngine.Vector3):number;
            
            public static SqrMagnitude($vector: UnityEngine.Vector3):number;
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Addition($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Subtraction($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_UnaryNegation($a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Multiply($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Multiply($d: number, $a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Division($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Equality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public ToString():string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            
            public constructor($x: number, $y: number, $z: number);
            
            public constructor($x: number, $y: number);
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public constructor();
            
        }
        
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable{
            /** X component of the vector. */
            public x: number;/** Y component of the vector. */
            public y: number;
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector2;
            
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            
            /** Shorthand for writing Vector2(0, 0). */
            public static get zero(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(1, 1). */
            public static get one(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(0, 1). */
            public static get up(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(0, -1). */
            public static get down(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(-1, 0). */
            public static get left(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(1, 0). */
            public static get right(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector2;
            
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector2;
            
            
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Set x and y components of an existing Vector2. */
            public Set($newX: number, $newY: number):void;
            /** Linearly interpolates between vectors a and b by t. */
            public static Lerp($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number):UnityEngine.Vector2;
            /** Linearly interpolates between vectors a and b by t. */
            public static LerpUnclamped($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number):UnityEngine.Vector2;
            /** Moves a point current towards target. */
            public static MoveTowards($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number):UnityEngine.Vector2;
            /** Multiplies two vectors component-wise. */
            public static Scale($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale($scale: UnityEngine.Vector2):void;
            
            public Normalize():void;
            
            public ToString():string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Vector2):boolean;
            /** Reflects a vector off the vector defined by a normal. */
            public static Reflect($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
             * @param inDirection The input direction.
             * @returns The perpendicular direction. 
             */
            public static Perpendicular($inDirection: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Dot Product of two vectors. */
            public static Dot($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):number;
            /** Returns the unsigned angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             */
            public static Angle($from: UnityEngine.Vector2, $to: UnityEngine.Vector2):number;
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             */
            public static SignedAngle($from: UnityEngine.Vector2, $to: UnityEngine.Vector2):number;
            /** Returns the distance between a and b. */
            public static Distance($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):number;
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude($vector: UnityEngine.Vector2, $maxLength: number):UnityEngine.Vector2;
            
            public static SqrMagnitude($a: UnityEngine.Vector2):number;
            
            public SqrMagnitude():number;
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector2;
            
            public static op_Addition($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Subtraction($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Multiply($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Division($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_UnaryNegation($a: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Multiply($a: UnityEngine.Vector2, $d: number):UnityEngine.Vector2;
            
            public static op_Multiply($d: number, $a: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Division($a: UnityEngine.Vector2, $d: number):UnityEngine.Vector2;
            
            public static op_Equality($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):boolean;
            
            public static op_Implicit($v: UnityEngine.Vector3):UnityEngine.Vector2;
            
            public static op_Implicit($v: UnityEngine.Vector2):UnityEngine.Vector3;
            
            public constructor($x: number, $y: number);
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public constructor();
            
        }
        
        /** The interface to get time information from Unity. */
        class Time extends System.Object{
            /** The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get time(): number;
            
            /** The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get timeAsDouble(): number;
            
            /** The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded. */
            public static get timeSinceLevelLoad(): number;
            
            /** The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded. */
            public static get timeSinceLevelLoadAsDouble(): number;
            
            /** The completion time in seconds since the last frame (Read Only). */
            public static get deltaTime(): number;
            
            /** The time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            
            /** The time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTimeAsDouble(): number;
            
            /** The timeScale-independant time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            
            /** The timeScale-independant time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTimeAsDouble(): number;
            
            /** The TimeScale-independant time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            
            /** The TimeScale-independant time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTimeAsDouble(): number;
            
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            
            /** The timeScale-independent interval in seconds from the last fixed frame to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum time a frame can take. Physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) will be performed only for this duration of time per frame. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. This can be used for slow motion effects. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames that have passed (Read Only). */
            public static get frameCount(): number;
            
            
            public static get renderedFrameCount(): number;
            
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup. This offers more precision than a float or single value, particularly over extended periods of real-world time. In almost all cases, choose the Time.realtimeSinceStartupAsDouble equivalent over Time.realtimeSinceStartup. */
            public static get realtimeSinceStartupAsDouble(): number;
            
            /** Slows game playback time to allow screenshots to be saved between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            
            
            
            public constructor();
            
        }
        
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable{
            /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            
            
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($p: UnityEngine.Transform):void;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             */
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
             * @param angle The degrees of rotation to apply.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            /** Transforms direction from local space to world space. */
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms vector from local space to world space. */
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from local space to world space. */
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from world space to local space. */
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            
            public DetachChildren():void;
            
            public SetAsFirstSibling():void;
            
            public SetAsLastSibling():void;
            /** Sets the sibling index. * @param index Index to set.
             */
            public SetSiblingIndex($index: number):void;
            
            public GetSiblingIndex():number;
            /** Finds a child by n and returns it.
             * @param n Name of child to be found.
             * @returns The returned child transform or null if no child is found. 
             */
            public Find($n: string):UnityEngine.Transform;
            /** Is this transform a child of parent? */
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            
            public GetEnumerator():System.Collections.IEnumerator;
            /** Returns a transform child by index.
             * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
             * @returns Transform child by index. 
             */
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object{
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't. Will also return disabled components. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless.
             */
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns the component of Type type in the GameObject or any of its parents.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public constructor();
            
        }
        
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object{
            /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            
            
            public GetInstanceID():number;
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type, $includeInactive: boolean):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public constructor();
            
        }
        
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>, System.IFormattable{
            
            
        }
        
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>, System.IFormattable{
            
            
        }
        
        /** The coordinate space in which to operate. */
        enum Space{ World = 0, Self = 1 }
        
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object{
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            
            
            public get gameObject(): UnityEngine.GameObject;
            
            
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
             */
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: string):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
             */
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
             */
            public SetActive($value: boolean):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
             */
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string):void;
            /** Finds a GameObject by name and returns it. */
            public static Find($name: string):UnityEngine.GameObject;
            
            public constructor($name: string);
            
            public constructor();
            
            public constructor($name: string, ...components: System.Type[]);
            
        }
        
        /** Options for how to send a message. */
        enum SendMessageOptions{ RequireReceiver = 0, DontRequireReceiver = 1 }
        
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType{ Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags{ None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        
        /** The Resources class allows you to find and access Objects including assets. */
        class Resources extends System.Object{
            
            /** Returns a list of all objects of Type type. */
            public static FindObjectsOfTypeAll($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
             * @param path Path to the target resource to load.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string):UnityEngine.Object;
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
             * @param path Path to the target resource to load.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string, $systemTypeInstance: System.Type):UnityEngine.Object;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAsync($path: string):UnityEngine.ResourceRequest;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAsync($path: string, $type: System.Type):UnityEngine.ResourceRequest;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAll($path: string, $systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAll($path: string):System.Array$1<UnityEngine.Object>;
            
            public static GetBuiltinResource($type: System.Type, $path: string):UnityEngine.Object;
            /** Unloads assetToUnload from memory. */
            public static UnloadAsset($assetToUnload: UnityEngine.Object):void;
            
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            /** Translates an instance ID to an object reference.
             * @param instanceID Instance ID of an Object.
             * @returns Resolved reference or null if the instance ID didn't match anything. 
             */
            public static InstanceIDToObject($instanceID: number):UnityEngine.Object;
            
            public static InstanceIDToObjectList($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>):void;
            
            public constructor();
            
        }
        
        /** Asynchronous load request from the Resources bundle. */
        class ResourceRequest extends UnityEngine.AsyncOperation{
            
            
        }
        
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction{
            
            
        }
        
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object{
            
            
        }
        
        /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
        class ParticleSystem extends UnityEngine.Component{
            /** Determines whether the Particle System is playing. */
            public get isPlaying(): boolean;
            
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
            public get isEmitting(): boolean;
            
            /** Determines whether the Particle System is in the stopped state. */
            public get isStopped(): boolean;
            
            /** Determines whether the Particle System is paused. */
            public get isPaused(): boolean;
            
            /** The current number of particles (Read Only). */
            public get particleCount(): number;
            
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Override the random seed used for the Particle System emission. */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation? */
            public get proceduralSimulationSupported(): boolean;
            
            /** Access the main Particle System settings. */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            
            /** Script interface for the EmissionModule of a Particle System. */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            
            /** Script interface for the ShapeModule of a Particle System.  */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            
            /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            
            /** Script interface for the InheritVelocityModule of a Particle System. */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            
            /** Script interface for the Particle System Lifetime By Emitter Speed module. */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            
            /** Script interface for the ForceOverLifetimeModule of a Particle System. */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            
            /** Script interface for the ColorOverLifetimeModule of a Particle System. */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            
            /** Script interface for the ColorByLifetimeModule of a Particle System. */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            
            /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            
            /** Script interface for the SizeBySpeedModule of a Particle System. */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            
            /** Script interface for the RotationOverLifetimeModule of a Particle System. */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            
            /** Script interface for the RotationBySpeedModule of a Particle System. */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            
            /** Script interface for the ExternalForcesModule of a Particle System. */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            
            /** Script interface for the NoiseModule of a Particle System. */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            
            /** Script interface for the CollisionModule of a Particle System. */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            
            /** Script interface for the TriggerModule of a Particle System. */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            
            /** Script interface for the SubEmittersModule of a Particle System. */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            
            /** Script interface for the TextureSheetAnimationModule of a Particle System. */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            
            /** Script interface for the LightsModule of a Particle System. */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            
            /** Script interface for the TrailsModule of a Particle System. */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            
            /** Script interface for the CustomDataModule of a Particle System. */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            
            
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public SetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):void;
            
            public GetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):number;
            
            public GetPlaybackState():UnityEngine.ParticleSystem.PlaybackState;
            
            public SetPlaybackState($playbackState: UnityEngine.ParticleSystem.PlaybackState):void;
            
            public GetTrails():UnityEngine.ParticleSystem.Trails;
            
            public SetTrails($trailData: UnityEngine.ParticleSystem.Trails):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number):void;
            /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
             */
            public Play($withChildren: boolean):void;
            
            public Play():void;
            /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
             */
            public Pause($withChildren: boolean):void;
            
            public Pause():void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean):void;
            
            public Stop():void;
            /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
             */
            public Clear($withChildren: boolean):void;
            
            public Clear():void;
            /** Does the Particle System contain any live particles, or will it produce more?
             * @param withChildren Check all child Particle Systems as well.
             * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
             */
            public IsAlive($withChildren: boolean):boolean;
            
            public IsAlive():boolean;
            /** Emit count particles immediately. * @param count Number of particles to emit.
             */
            public Emit($count: number):void;
            
            public Emit($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number):void;
            /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
             */
            public TriggerSubEmitter($subEmitterIndex: number):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public static ResetPreMappedBufferMemory():void;
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
             * @param indexBuffersCount The maximum number of cached index buffers.
             */
            public static SetMaximumPreMappedBufferCounts($vertexBuffersCount: number, $indexBuffersCount: number):void;
            
            public AllocateAxisOfRotationAttribute():void;
            
            public AllocateMeshIndexAttribute():void;
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
             */
            public AllocateCustomDataAttribute($stream: UnityEngine.ParticleSystemCustomData):void;
            
            public constructor();
            
        }
        
        /** Representation of RGBA colors in 32 bit format. */
        class Color32 extends System.ValueType implements System.IFormattable{
            
            
        }
        
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>, System.IFormattable{
            /** Red component of the color. */
            public r: number;/** Green component of the color. */
            public g: number;/** Blue component of the color. */
            public b: number;/** Alpha component of the color (0 is transparent, 1 is opaque). */
            public a: number;/** Solid red. RGBA is (1, 0, 0, 1). */
            public static get red(): UnityEngine.Color;
            
            /** Solid green. RGBA is (0, 1, 0, 1). */
            public static get green(): UnityEngine.Color;
            
            /** Solid blue. RGBA is (0, 0, 1, 1). */
            public static get blue(): UnityEngine.Color;
            
            /** Solid white. RGBA is (1, 1, 1, 1). */
            public static get white(): UnityEngine.Color;
            
            /** Solid black. RGBA is (0, 0, 0, 1). */
            public static get black(): UnityEngine.Color;
            
            /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at! */
            public static get yellow(): UnityEngine.Color;
            
            /** Cyan. RGBA is (0, 1, 1, 1). */
            public static get cyan(): UnityEngine.Color;
            
            /** Magenta. RGBA is (1, 0, 1, 1). */
            public static get magenta(): UnityEngine.Color;
            
            /** Gray. RGBA is (0.5, 0.5, 0.5, 1). */
            public static get gray(): UnityEngine.Color;
            
            /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1). */
            public static get grey(): UnityEngine.Color;
            
            /** Completely transparent. RGBA is (0, 0, 0, 0). */
            public static get clear(): UnityEngine.Color;
            
            /** The grayscale value of the color. (Read Only) */
            public get grayscale(): number;
            
            /** A linear value of an sRGB color. */
            public get linear(): UnityEngine.Color;
            
            /** A version of the color that has had the gamma curve applied. */
            public get gamma(): UnityEngine.Color;
            
            /** Returns the maximum color component value: Max(r,g,b). */
            public get maxColorComponent(): number;
            
            
            
            public ToString():string;
            /** Returns a formatted string of this color. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string of this color. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Color):boolean;
            
            public static op_Addition($a: UnityEngine.Color, $b: UnityEngine.Color):UnityEngine.Color;
            
            public static op_Subtraction($a: UnityEngine.Color, $b: UnityEngine.Color):UnityEngine.Color;
            
            public static op_Multiply($a: UnityEngine.Color, $b: UnityEngine.Color):UnityEngine.Color;
            
            public static op_Multiply($a: UnityEngine.Color, $b: number):UnityEngine.Color;
            
            public static op_Multiply($b: number, $a: UnityEngine.Color):UnityEngine.Color;
            
            public static op_Division($a: UnityEngine.Color, $b: number):UnityEngine.Color;
            
            public static op_Equality($lhs: UnityEngine.Color, $rhs: UnityEngine.Color):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Color, $rhs: UnityEngine.Color):boolean;
            /** Linearly interpolates between colors a and b by t. * @param a Color a.
             * @param b Color b.
             * @param t Float for combining a and b.
             */
            public static Lerp($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number):UnityEngine.Color;
            /** Linearly interpolates between colors a and b by t. */
            public static LerpUnclamped($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number):UnityEngine.Color;
            
            public static op_Implicit($c: UnityEngine.Color):UnityEngine.Vector4;
            
            public static op_Implicit($v: UnityEngine.Vector4):UnityEngine.Color;
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Calculates the hue, saturation and value of an RGB input color. * @param rgbColor An input color.
             * @param H Output variable for hue.
             * @param S Output variable for saturation.
             * @param V Output variable for value.
             */
            public static RGBToHSV($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>):void;
            /** Creates an RGB colour from HSV input.
             * @param H Hue [0..1].
             * @param S Saturation [0..1].
             * @param V Brightness value [0..1].
             * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
             * @returns An opaque colour with HSV matching the input. 
             */
            public static HSVToRGB($H: number, $S: number, $V: number):UnityEngine.Color;
            /** Creates an RGB colour from HSV input.
             * @param H Hue [0..1].
             * @param S Saturation [0..1].
             * @param V Brightness value [0..1].
             * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
             * @returns An opaque colour with HSV matching the input. 
             */
            public static HSVToRGB($H: number, $S: number, $V: number, $hdr: boolean):UnityEngine.Color;
            
            public constructor($r: number, $g: number, $b: number, $a: number);
            
            public constructor($r: number, $g: number, $b: number);
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public constructor();
            
        }
        
        /** The space to simulate particles in. */
        enum ParticleSystemSimulationSpace{ Local = 0, World = 1, Custom = 2 }
        
        /** Control how particle systems apply transform scale. */
        enum ParticleSystemScalingMode{ Hierarchy = 0, Local = 1, Shape = 2 }
        
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector4>, System.IFormattable{
            
            
        }
        
        /** Which stream of custom particle data to set. */
        enum ParticleSystemCustomData{ Custom1 = 0, Custom2 = 1 }
        
        /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
        enum ParticleSystemStopBehavior{ StopEmittingAndClear = 0, StopEmitting = 1 }
        
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component{
            /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            
            
            
            public constructor();
            
        }
        
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour{
            /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            
            
            public IsInvoking():boolean;
            
            public CancelInvoke():void;
            /** Invokes the method methodName in time seconds. */
            public Invoke($methodName: string, $time: number):void;
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke($methodName: string):void;
            /** Is any invoke on methodName pending? */
            public IsInvoking($methodName: string):boolean;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string):UnityEngine.Coroutine;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
            /** Starts a Coroutine. */
            public StartCoroutine($routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: System.Collections.IEnumerator):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: UnityEngine.Coroutine):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($methodName: string):void;
            
            public StopAllCoroutines():void;
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print($message: any):void;
            
            public constructor();
            
        }
        
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction{
            
            
        }
        
        /** Access to application run-time data. */
        class Application extends System.Object{
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            
            /** (Read Only) Contains the path to a persistent data directory. */
            public static get persistentDataPath(): string;
            
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            
            /** Instructs the game to try to render at a specified frame rate. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            
            
            
            public static Quit($exitCode: number):void;
            
            public static Quit():void;
            
            public static Unload():void;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelIndex: number):boolean;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelName: string):boolean;
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
             * @param obj The object to test.
             * @returns True if the object is part of the playing world. 
             */
            public static IsPlaying($obj: UnityEngine.Object):boolean;
            
            public static GetBuildTags():System.Array$1<string>;
            /** Set an array of feature tags for this build. */
            public static SetBuildTags($buildTags: System.Array$1<string>):void;
            
            public static HasProLicense():boolean;
            
            public static RequestAdvertisingIdentifierAsync($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
             */
            public static OpenURL($url: string):void;
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType($logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType):void;
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization($mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization($mode: UnityEngine.UserAuthorization):boolean;
            
            public static add_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static remove_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static add_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static add_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static add_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static remove_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static add_focusChanged($value: System.Action$1<boolean>):void;
            
            public static remove_focusChanged($value: System.Action$1<boolean>):void;
            
            public static add_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static remove_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static add_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static remove_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static add_quitting($value: System.Action):void;
            
            public static remove_quitting($value: System.Action):void;
            
            public static add_unloading($value: System.Action):void;
            
            public static remove_unloading($value: System.Action):void;
            
            public constructor();
            
        }
        
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode{ Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        
        /** Application sandbox type. */
        enum ApplicationSandboxType{ Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        
        /** Stack trace logging options. */
        enum StackTraceLogType{ None = 0, ScriptOnly = 1, Full = 2 }
        
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType{ Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        
        /** Priority of a thread. */
        enum ThreadPriority{ Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization{ WebCam = 1, Microphone = 2 }
        
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform{ OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38 }
        
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage{ Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        
        /** Describes network reachability options. */
        enum NetworkReachability{ NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object{
            /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            
            /** The text contents of the .txt file as a string. (Read Only) */
            public get text(): string;
            
            
            
            public constructor();
            
            public constructor($text: string);
            
        }
        
        /** Base class for texture handling. */
        class Texture extends UnityEngine.Object{
            /** Can be used with texture constructors that take a mip count to indicate that all mips should be generated.  The value of this field is -1. */
            public static GenerateAllMips: number;
            public static get masterTextureLimit(): number;
            public static set masterTextureLimit(value: number);
            /** How many mipmap levels are in this texture (Read Only). */
            public get mipmapCount(): number;
            
            
            public static get anisotropicFiltering(): UnityEngine.AnisotropicFiltering;
            public static set anisotropicFiltering(value: UnityEngine.AnisotropicFiltering);
            /** Returns the GraphicsFormat format or color format of a texture object. */
            public get graphicsFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            
            /** Width of the texture in pixels. (Read Only) */
            public get width(): number;
            public set width(value: number);
            /** Height of the texture in pixels. (Read Only) */
            public get height(): number;
            public set height(value: number);
            /** Dimensionality (type) of the texture (Read Only). */
            public get dimension(): UnityEngine.Rendering.TextureDimension;
            public set dimension(value: UnityEngine.Rendering.TextureDimension);
            /** Returns true if the Read/Write Enabled checkbox was checked when the texture was imported; otherwise returns false. For a dynamic Texture created from script, always returns true. For additional information, see TextureImporter.isReadable. */
            public get isReadable(): boolean;
            
            /** Texture coordinate wrapping mode. */
            public get wrapMode(): UnityEngine.TextureWrapMode;
            public set wrapMode(value: UnityEngine.TextureWrapMode);
            /** Texture U coordinate wrapping mode. */
            public get wrapModeU(): UnityEngine.TextureWrapMode;
            public set wrapModeU(value: UnityEngine.TextureWrapMode);
            /** Texture V coordinate wrapping mode. */
            public get wrapModeV(): UnityEngine.TextureWrapMode;
            public set wrapModeV(value: UnityEngine.TextureWrapMode);
            /** Texture W coordinate wrapping mode for Texture3D. */
            public get wrapModeW(): UnityEngine.TextureWrapMode;
            public set wrapModeW(value: UnityEngine.TextureWrapMode);
            /** Filtering mode of the texture. */
            public get filterMode(): UnityEngine.FilterMode;
            public set filterMode(value: UnityEngine.FilterMode);
            /** Anisotropic filtering level of the texture. */
            public get anisoLevel(): number;
            public set anisoLevel(value: number);
            /** Mip map bias of the texture. */
            public get mipMapBias(): number;
            public set mipMapBias(value: number);
            
            public get texelSize(): UnityEngine.Vector2;
            
            /** This counter is incremented when the texture is updated. */
            public get updateCount(): number;
            
            /** The hash value of the Texture. */
            public get imageContentsHash(): UnityEngine.Hash128;
            public set imageContentsHash(value: UnityEngine.Hash128);
            /** The total amount of memory that would be used by all textures at mipmap level 0. */
            public static get totalTextureMemory(): bigint;
            
            /** This amount of texture memory would be used before the texture streaming budget is applied. */
            public static get desiredTextureMemory(): bigint;
            
            /** The amount of memory used by textures after the mipmap streaming and budget are applied and loading is complete. */
            public static get targetTextureMemory(): bigint;
            
            /** The amount of memory currently being used by the non-streaming and mipmap streaming textures combined. */
            public static get currentTextureMemory(): bigint;
            
            /** Total amount of memory being used by non-streaming textures. */
            public static get nonStreamingTextureMemory(): bigint;
            
            /** How many times has a texture been uploaded due to texture mipmap streaming. */
            public static get streamingMipmapUploadCount(): bigint;
            
            /** Number of renderers registered with the texture streaming system. */
            public static get streamingRendererCount(): bigint;
            
            /** Number of streaming textures. */
            public static get streamingTextureCount(): bigint;
            
            /** Number of non-streaming textures. */
            public static get nonStreamingTextureCount(): bigint;
            
            /** Number of streaming textures with outstanding mipmaps to be loaded. */
            public static get streamingTexturePendingLoadCount(): bigint;
            
            /** Number of streaming textures with mipmaps currently loading. */
            public static get streamingTextureLoadingCount(): bigint;
            
            /** Force streaming textures to load all mipmap levels. */
            public static get streamingTextureForceLoadAll(): boolean;
            public static set streamingTextureForceLoadAll(value: boolean);
            /** Force the streaming texture system to discard all unused mipmaps immediately, rather than caching them until the texture memory budget is exceeded. */
            public static get streamingTextureDiscardUnusedMips(): boolean;
            public static set streamingTextureDiscardUnusedMips(value: boolean);
            /** Allow Unity internals to perform texture creation on any thread (rather than the dedicated render thread). */
            public static get allowThreadedTextureCreation(): boolean;
            public static set allowThreadedTextureCreation(value: boolean);
            
            /** Sets Anisotropic limits. */
            public static SetGlobalAnisotropicFilteringLimits($forcedMin: number, $globalMax: number):void;
            
            public GetNativeTexturePtr():System.IntPtr;
            
            public IncrementUpdateCount():void;
            
            public static SetStreamingTextureMaterialDebugProperties():void;
            
        }
        
        /** Anisotropic filtering mode. */
        enum AnisotropicFiltering{ Disable = 0, Enable = 1, ForceEnable = 2 }
        
        /** Wrap mode for textures. */
        enum TextureWrapMode{ Repeat = 0, Clamp = 1, Mirror = 2, MirrorOnce = 3 }
        
        /** Filtering mode for textures. Corresponds to the settings in a. */
        enum FilterMode{ Point = 0, Bilinear = 1, Trilinear = 2 }
        
        /** Represents  a 128-bit hash value. */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>{
            
            
        }
        
        /** Type of the imported(native) data. */
        enum AudioType{ UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
        
        /** Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information. */
        class CachedAssetBundle extends System.ValueType{
            
            
        }
        
        /** Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes. */
        class WWWForm extends System.Object{
            
            
        }
        
        /** A container for audio data. */
        class AudioClip extends UnityEngine.Object{
            
            
        }
        
        /** Class that represents textures in C# code. */
        class Texture2D extends UnityEngine.Texture{
            
            
        }
        
        /** A collection of common math functions. */
        class Mathf extends System.ValueType{
            /** The well-known 3.14159265358979... value (Read Only). */
            public static PI: number;/** A representation of positive infinity (Read Only). */
            public static Infinity: number;/** A representation of negative infinity (Read Only). */
            public static NegativeInfinity: number;/** Degrees-to-radians conversion constant (Read Only). */
            public static Deg2Rad: number;/** Radians-to-degrees conversion constant (Read Only). */
            public static Rad2Deg: number;/** A tiny floating point value (Read Only). */
            public static Epsilon: number;
            /** Returns the closest power of two value. */
            public static ClosestPowerOfTwo($value: number):number;
            /** Returns true if the value is power of two. */
            public static IsPowerOfTwo($value: number):boolean;
            /** Returns the next power of two that is equal to, or greater than, the argument. */
            public static NextPowerOfTwo($value: number):number;
            /** Converts the given value from gamma (sRGB) to linear color space. */
            public static GammaToLinearSpace($value: number):number;
            /** Converts the given value from linear to gamma (sRGB) color space. */
            public static LinearToGammaSpace($value: number):number;
            /** Convert a color temperature in Kelvin to RGB color.
             * @param kelvin Temperature in Kelvin. Range 1000 to 40000 Kelvin.
             * @returns Correlated Color Temperature as floating point RGB color. 
             */
            public static CorrelatedColorTemperatureToRGB($kelvin: number):UnityEngine.Color;
            /** Encode a floating point value into a 16-bit representation.
             * @param val The floating point value to convert.
             * @returns The converted half-precision float, stored in a 16-bit unsigned integer. 
             */
            public static FloatToHalf($val: number):number;
            /** Convert a half precision float to a 32-bit floating point value.
             * @param val The half precision value to convert.
             * @returns The decoded 32-bit float. 
             */
            public static HalfToFloat($val: number):number;
            /** Generate 2D Perlin noise.
             * @param x X-coordinate of sample point.
             * @param y Y-coordinate of sample point.
             * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.) 
             */
            public static PerlinNoise($x: number, $y: number):number;
            /** Returns the sine of angle f.
             * @param f The input angle, in radians.
             * @returns The return value between -1 and +1. 
             */
            public static Sin($f: number):number;
            /** Returns the cosine of angle f.
             * @param f The input angle, in radians.
             * @returns The return value between -1 and 1. 
             */
            public static Cos($f: number):number;
            /** Returns the tangent of angle f in radians. */
            public static Tan($f: number):number;
            /** Returns the arc-sine of f - the angle in radians whose sine is f. */
            public static Asin($f: number):number;
            /** Returns the arc-cosine of f - the angle in radians whose cosine is f. */
            public static Acos($f: number):number;
            /** Returns the arc-tangent of f - the angle in radians whose tangent is f. */
            public static Atan($f: number):number;
            /** Returns the angle in radians whose Tan is y/x. */
            public static Atan2($y: number, $x: number):number;
            /** Returns square root of f. */
            public static Sqrt($f: number):number;
            /** Returns the absolute value of f. */
            public static Abs($f: number):number;
            /** Returns the absolute value of value. */
            public static Abs($value: number):number;
            /** Returns the smallest of two or more values. */
            public static Min($a: number, $b: number):number;
            /** Returns the smallest of two or more values. */
            public static Min(...values: number[]):number;
            /** Returns the smallest of two or more values. */
            public static Min($a: number, $b: number):number;
            /** Returns the smallest of two or more values. */
            public static Min(...values: number[]):number;
            /** Returns largest of two or more values. */
            public static Max($a: number, $b: number):number;
            /** Returns largest of two or more values. */
            public static Max(...values: number[]):number;
            /** Returns the largest of two or more values. */
            public static Max($a: number, $b: number):number;
            /** Returns the largest of two or more values. */
            public static Max(...values: number[]):number;
            /** Returns f raised to power p. */
            public static Pow($f: number, $p: number):number;
            /** Returns e raised to the specified power. */
            public static Exp($power: number):number;
            /** Returns the logarithm of a specified number in a specified base. */
            public static Log($f: number, $p: number):number;
            /** Returns the natural (base e) logarithm of a specified number. */
            public static Log($f: number):number;
            /** Returns the base 10 logarithm of a specified number. */
            public static Log10($f: number):number;
            /** Returns the smallest integer greater to or equal to f. */
            public static Ceil($f: number):number;
            /** Returns the largest integer smaller than or equal to f. */
            public static Floor($f: number):number;
            /** Returns f rounded to the nearest integer. */
            public static Round($f: number):number;
            /** Returns the smallest integer greater to or equal to f. */
            public static CeilToInt($f: number):number;
            /** Returns the largest integer smaller to or equal to f. */
            public static FloorToInt($f: number):number;
            /** Returns f rounded to the nearest integer. */
            public static RoundToInt($f: number):number;
            /** Returns the sign of f. */
            public static Sign($f: number):number;
            /** Clamps the given value between the given minimum float and maximum float values.  Returns the given value if it is within the min and max range.
             * @param value The floating point value to restrict inside the range defined by the min and max values.
             * @param min The minimum floating point value to compare against.
             * @param max The maximum floating point value to compare against.
             * @returns The float result between the min and max values. 
             */
            public static Clamp($value: number, $min: number, $max: number):number;
            /** Clamps the given value between a range defined by the given minimum integer and maximum integer values. Returns the given value if it is within min and max.
             * @param value The integer point value to restrict inside the min-to-max range
             * @param min The minimum integer point value to compare against.
             * @param max The maximum  integer point value to compare against.
             * @returns The int result between min and max values. 
             */
            public static Clamp($value: number, $min: number, $max: number):number;
            /** Clamps value between 0 and 1 and returns value. */
            public static Clamp01($value: number):number;
            /** Linearly interpolates between a and b by t.
             * @param a The start value.
             * @param b The end value.
             * @param t The interpolation value between the two floats.
             * @returns The interpolated float result between the two float values. 
             */
            public static Lerp($a: number, $b: number, $t: number):number;
            /** Linearly interpolates between a and b by t with no limit to t.
             * @param a The start value.
             * @param b The end value.
             * @param t The interpolation between the two floats.
             * @returns The float value as a result from the linear interpolation. 
             */
            public static LerpUnclamped($a: number, $b: number, $t: number):number;
            /** Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static LerpAngle($a: number, $b: number, $t: number):number;
            /** Moves a value current towards target. * @param current The current value.
             * @param target The value to move towards.
             * @param maxDelta The maximum change that should be applied to the value.
             */
            public static MoveTowards($current: number, $target: number, $maxDelta: number):number;
            /** Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static MoveTowardsAngle($current: number, $target: number, $maxDelta: number):number;
            /** Interpolates between min and max with smoothing at the limits. */
            public static SmoothStep($from: number, $to: number, $t: number):number;
            
            public static Gamma($value: number, $absmax: number, $gamma: number):number;
            /** Compares two floating point values and returns true if they are similar. */
            public static Approximately($a: number, $b: number):boolean;
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number):number;
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number):number;
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):number;
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number):number;
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number):number;
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):number;
            /** Loops the value t, so that it is never larger than length and never smaller than 0. */
            public static Repeat($t: number, $length: number):number;
            /** PingPong returns a value that will increment and decrement between the value 0 and length. */
            public static PingPong($t: number, $length: number):number;
            /** Calculates the linear parameter t that produces the interpolant value within the range [a, b].
             * @param a Start value.
             * @param b End value.
             * @param value Value between start and end.
             * @returns Percentage of value between start and end. 
             */
            public static InverseLerp($a: number, $b: number, $value: number):number;
            /** Calculates the shortest difference between two given angles given in degrees. */
            public static DeltaAngle($current: number, $target: number):number;
            
        }
        
        /** General functionality for all renderers. */
        class Renderer extends UnityEngine.Component{
            /** The bounding volume of the renderer (Read Only). */
            public get bounds(): UnityEngine.Bounds;
            
            /** Makes the rendered 3D object visible if enabled. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Is this renderer visible in any camera? (Read Only) */
            public get isVisible(): boolean;
            
            /** Does this object cast shadows? */
            public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
            public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
            /** Does this object receive shadows? */
            public get receiveShadows(): boolean;
            public set receiveShadows(value: boolean);
            /** Allows turning off rendering for a specific component. */
            public get forceRenderingOff(): boolean;
            public set forceRenderingOff(value: boolean);
            /** Specifies the mode for motion vector rendering. */
            public get motionVectorGenerationMode(): UnityEngine.MotionVectorGenerationMode;
            public set motionVectorGenerationMode(value: UnityEngine.MotionVectorGenerationMode);
            /** The light probe interpolation type. */
            public get lightProbeUsage(): UnityEngine.Rendering.LightProbeUsage;
            public set lightProbeUsage(value: UnityEngine.Rendering.LightProbeUsage);
            /** Should reflection probes be used for this Renderer? */
            public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
            public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
            /** Determines which rendering layer this renderer lives on. */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /** This value sorts renderers by priority. Lower values are rendered first and higher values are rendered last. */
            public get rendererPriority(): number;
            public set rendererPriority(value: number);
            /** Describes how this renderer is updated for ray tracing. */
            public get rayTracingMode(): UnityEngine.Experimental.Rendering.RayTracingMode;
            public set rayTracingMode(value: UnityEngine.Experimental.Rendering.RayTracingMode);
            /** Name of the Renderer's sorting layer. */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Unique ID of the Renderer's sorting layer. */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Renderer's order within a sorting layer. */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** Controls if dynamic occlusion culling should be performed for this renderer. */
            public get allowOcclusionWhenDynamic(): boolean;
            public set allowOcclusionWhenDynamic(value: boolean);
            /** Has this renderer been statically batched with any other renderers? */
            public get isPartOfStaticBatch(): boolean;
            
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            
            /** If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject. */
            public get lightProbeProxyVolumeOverride(): UnityEngine.GameObject;
            public set lightProbeProxyVolumeOverride(value: UnityEngine.GameObject);
            /** If set, Renderer will use this Transform's position to find the light or reflection probe. */
            public get probeAnchor(): UnityEngine.Transform;
            public set probeAnchor(value: UnityEngine.Transform);
            /** The index of the baked lightmap applied to this renderer. */
            public get lightmapIndex(): number;
            public set lightmapIndex(value: number);
            /** The index of the realtime lightmap applied to this renderer. */
            public get realtimeLightmapIndex(): number;
            public set realtimeLightmapIndex(value: number);
            /** The UV scale & offset used for a lightmap. */
            public get lightmapScaleOffset(): UnityEngine.Vector4;
            public set lightmapScaleOffset(value: UnityEngine.Vector4);
            /** The UV scale & offset used for a realtime lightmap. */
            public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
            public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
            /** Returns all the instantiated materials of this object. */
            public get materials(): System.Array$1<UnityEngine.Material>;
            public set materials(value: System.Array$1<UnityEngine.Material>);
            /** Returns the first instantiated Material assigned to the renderer. */
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            /** The shared material of this object. */
            public get sharedMaterial(): UnityEngine.Material;
            public set sharedMaterial(value: UnityEngine.Material);
            /** All the shared materials of this object. */
            public get sharedMaterials(): System.Array$1<UnityEngine.Material>;
            public set sharedMaterials(value: System.Array$1<UnityEngine.Material>);
            
            
            public HasPropertyBlock():boolean;
            /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
             * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
             */
            public SetPropertyBlock($properties: UnityEngine.MaterialPropertyBlock):void;
            /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
             * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
             */
            public SetPropertyBlock($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number):void;
            /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
             * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
             */
            public GetPropertyBlock($properties: UnityEngine.MaterialPropertyBlock):void;
            /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
             * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
             */
            public GetPropertyBlock($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number):void;
            
            public GetMaterials($m: System.Collections.Generic.List$1<UnityEngine.Material>):void;
            
            public GetSharedMaterials($m: System.Collections.Generic.List$1<UnityEngine.Material>):void;
            
            public GetClosestReflectionProbes($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>):void;
            
            public constructor();
            
        }
        
        /** Represents an axis aligned bounding box. */
        class Bounds extends System.ValueType implements System.IEquatable$1<UnityEngine.Bounds>, System.IFormattable{
            
            
        }
        
        /** A block of material values to apply. */
        class MaterialPropertyBlock extends System.Object{
            /** Is the material property block empty? (Read Only) */
            public get isEmpty(): boolean;
            
            
            
            public Clear():void;
            /** Set a float property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The float value to set.
             */
            public SetFloat($name: string, $value: number):void;
            /** Set a float property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The float value to set.
             */
            public SetFloat($nameID: number, $value: number):void;
            /** Adds a property to the block. If an int property with the given name already exists, the old value is replaced. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The int value to set.
             */
            public SetInt($name: string, $value: number):void;
            /** Adds a property to the block. If an int property with the given name already exists, the old value is replaced. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The int value to set.
             */
            public SetInt($nameID: number, $value: number):void;
            /** Set a vector property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Vector4 value to set.
             */
            public SetVector($name: string, $value: UnityEngine.Vector4):void;
            /** Set a vector property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Vector4 value to set.
             */
            public SetVector($nameID: number, $value: UnityEngine.Vector4):void;
            /** Set a color property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Color value to set.
             */
            public SetColor($name: string, $value: UnityEngine.Color):void;
            /** Set a color property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Color value to set.
             */
            public SetColor($nameID: number, $value: UnityEngine.Color):void;
            /** Set a matrix property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The matrix value to set.
             */
            public SetMatrix($name: string, $value: UnityEngine.Matrix4x4):void;
            /** Set a matrix property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The matrix value to set.
             */
            public SetMatrix($nameID: number, $value: UnityEngine.Matrix4x4):void;
            /** Set a buffer property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The ComputeBuffer or GraphicsBuffer to set.
             */
            public SetBuffer($name: string, $value: UnityEngine.ComputeBuffer):void;
            /** Set a buffer property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The ComputeBuffer or GraphicsBuffer to set.
             */
            public SetBuffer($nameID: number, $value: UnityEngine.ComputeBuffer):void;
            /** Set a buffer property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The ComputeBuffer or GraphicsBuffer to set.
             */
            public SetBuffer($name: string, $value: UnityEngine.GraphicsBuffer):void;
            /** Set a buffer property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The ComputeBuffer or GraphicsBuffer to set.
             */
            public SetBuffer($nameID: number, $value: UnityEngine.GraphicsBuffer):void;
            /** Set a texture property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Texture to set.
             * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
             */
            public SetTexture($name: string, $value: UnityEngine.Texture):void;
            /** Set a texture property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Texture to set.
             * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
             */
            public SetTexture($nameID: number, $value: UnityEngine.Texture):void;
            /** Set a texture property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Texture to set.
             * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
             */
            public SetTexture($name: string, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement):void;
            /** Set a texture property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param value The Texture to set.
             * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
             */
            public SetTexture($nameID: number, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement):void;
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the MaterialPropertyBlock. * @param name The name of the constant buffer to override.
             * @param value The buffer to override the constant buffer values with.
             * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
             * @param size The number of bytes to bind.
             * @param nameID The shader property ID of the constant buffer to override.
             */
            public SetConstantBuffer($name: string, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number):void;
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the MaterialPropertyBlock. * @param name The name of the constant buffer to override.
             * @param value The buffer to override the constant buffer values with.
             * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
             * @param size The number of bytes to bind.
             * @param nameID The shader property ID of the constant buffer to override.
             */
            public SetConstantBuffer($nameID: number, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number):void;
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the MaterialPropertyBlock. * @param name The name of the constant buffer to override.
             * @param value The buffer to override the constant buffer values with.
             * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
             * @param size The number of bytes to bind.
             * @param nameID The shader property ID of the constant buffer to override.
             */
            public SetConstantBuffer($name: string, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number):void;
            /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the MaterialPropertyBlock. * @param name The name of the constant buffer to override.
             * @param value The buffer to override the constant buffer values with.
             * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
             * @param size The number of bytes to bind.
             * @param nameID The shader property ID of the constant buffer to override.
             */
            public SetConstantBuffer($nameID: number, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number):void;
            
            public SetFloatArray($name: string, $values: System.Collections.Generic.List$1<number>):void;
            
            public SetFloatArray($nameID: number, $values: System.Collections.Generic.List$1<number>):void;
            /** Set a float array property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param values The array to set.
             */
            public SetFloatArray($name: string, $values: System.Array$1<number>):void;
            /** Set a float array property. * @param name The name of the property.
             * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param values The array to set.
             */
            public SetFloatArray($nameID: number, $values: System.Array$1<number>):void;
            
            public SetVectorArray($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            
            public SetVectorArray($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            /** Set a vector array property. * @param nameID The name of the property.
             * @param values The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The array to set.
             */
            public SetVectorArray($name: string, $values: System.Array$1<UnityEngine.Vector4>):void;
            /** Set a vector array property. * @param nameID The name of the property.
             * @param values The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The array to set.
             */
            public SetVectorArray($nameID: number, $values: System.Array$1<UnityEngine.Vector4>):void;
            
            public SetMatrixArray($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            
            public SetMatrixArray($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            /** Set a matrix array property. * @param name The name of the property.
             * @param values The name ID of the property retrieved by Shader.PropertyToID.
             * @param nameID The array to set.
             */
            public SetMatrixArray($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>):void;
            /** Set a matrix array property. * @param name The name of the property.
             * @param values The name ID of the property retrieved by Shader.PropertyToID.
             * @param nameID The array to set.
             */
            public SetMatrixArray($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>):void;
            /** Get a float from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetFloat($name: string):number;
            /** Get a float from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetFloat($nameID: number):number;
            /** Get an int from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetInt($name: string):number;
            /** Get an int from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetInt($nameID: number):number;
            /** Get a vector from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetVector($name: string):UnityEngine.Vector4;
            /** Get a vector from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetVector($nameID: number):UnityEngine.Vector4;
            /** Get a color from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetColor($name: string):UnityEngine.Color;
            /** Get a color from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetColor($nameID: number):UnityEngine.Color;
            /** Get a matrix from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetMatrix($name: string):UnityEngine.Matrix4x4;
            /** Get a matrix from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetMatrix($nameID: number):UnityEngine.Matrix4x4;
            /** Get a texture from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetTexture($name: string):UnityEngine.Texture;
            /** Get a texture from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetTexture($nameID: number):UnityEngine.Texture;
            /** Get a float array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetFloatArray($name: string):System.Array$1<number>;
            /** Get a float array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetFloatArray($nameID: number):System.Array$1<number>;
            /** Get a vector array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetVectorArray($name: string):System.Array$1<UnityEngine.Vector4>;
            /** Get a vector array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetVectorArray($nameID: number):System.Array$1<UnityEngine.Vector4>;
            /** Get a matrix array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetMatrixArray($name: string):System.Array$1<UnityEngine.Matrix4x4>;
            /** Get a matrix array from the property block. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
             * @param name The name of the property.
             */
            public GetMatrixArray($nameID: number):System.Array$1<UnityEngine.Matrix4x4>;
            
            public GetFloatArray($name: string, $values: System.Collections.Generic.List$1<number>):void;
            
            public GetFloatArray($nameID: number, $values: System.Collections.Generic.List$1<number>):void;
            
            public GetVectorArray($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            
            public GetVectorArray($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            
            public GetMatrixArray($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            
            public GetMatrixArray($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            
            public CopySHCoefficientArraysFrom($lightProbes: System.Collections.Generic.List$1<UnityEngine.Rendering.SphericalHarmonicsL2>):void;
            /** This function converts and copies the entire source array into 7 Vector4 property arrays named unity_SHAr, unity_SHAg, unity_SHAb, unity_SHBr, unity_SHBg, unity_SHBb and unity_SHC for use with instanced rendering. * @param lightProbes The array of SH values to copy from.
             */
            public CopySHCoefficientArraysFrom($lightProbes: System.Array$1<UnityEngine.Rendering.SphericalHarmonicsL2>):void;
            
            public CopySHCoefficientArraysFrom($lightProbes: System.Collections.Generic.List$1<UnityEngine.Rendering.SphericalHarmonicsL2>, $sourceStart: number, $destStart: number, $count: number):void;
            /** This function converts and copies the source array into 7 Vector4 property arrays named unity_SHAr, unity_SHAg, unity_SHAb, unity_SHBr, unity_SHBg, unity_SHBb and unity_SHC with the specified source and destination range for use with instanced rendering. * @param lightProbes The array of SH values to copy from.
             * @param sourceStart The index of the first element in the source array to copy from.
             * @param destStart The index of the first element in the destination MaterialPropertyBlock array to copy to.
             * @param count The number of elements to copy.
             */
            public CopySHCoefficientArraysFrom($lightProbes: System.Array$1<UnityEngine.Rendering.SphericalHarmonicsL2>, $sourceStart: number, $destStart: number, $count: number):void;
            
            public CopyProbeOcclusionArrayFrom($occlusionProbes: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            /** This function copies the entire source array into a Vector4 property array named unity_ProbesOcclusion for use with instanced rendering. * @param occlusionProbes The array of probe occlusion values to copy from.
             */
            public CopyProbeOcclusionArrayFrom($occlusionProbes: System.Array$1<UnityEngine.Vector4>):void;
            
            public CopyProbeOcclusionArrayFrom($occlusionProbes: System.Collections.Generic.List$1<UnityEngine.Vector4>, $sourceStart: number, $destStart: number, $count: number):void;
            /** This function copies the source array into a Vector4 property array named unity_ProbesOcclusion with the specified source and destination range for use with instanced rendering. * @param occlusionProbes The array of probe occlusion values to copy from.
             * @param sourceStart The index of the first element in the source array to copy from.
             * @param destStart The index of the first element in the destination MaterialPropertyBlock array to copy to.
             * @param count The number of elements to copy.
             */
            public CopyProbeOcclusionArrayFrom($occlusionProbes: System.Array$1<UnityEngine.Vector4>, $sourceStart: number, $destStart: number, $count: number):void;
            
            public constructor();
            
        }
        
        /** The type of motion vectors that should be generated. */
        enum MotionVectorGenerationMode{ Camera = 0, Object = 1, ForceNoMotion = 2 }
        
        /** The material class. */
        class Material extends UnityEngine.Object{
            
            
        }
        
        /** GPU data buffer, mostly for use with compute shaders. */
        class ComputeBuffer extends System.Object implements System.IDisposable{
            
            
        }
        
        /** GPU graphics data buffer, for working with data such as vertex and index buffers. */
        class GraphicsBuffer extends System.Object implements System.IDisposable{
            
            
        }
        
        /** Render textures are textures that can be rendered to. */
        class RenderTexture extends UnityEngine.Texture{
            
            
        }
        
        /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
        class ScriptableObject extends UnityEngine.Object{
            
            
        }
        
        /** A Camera is a device through which the player views the world. */
        class Camera extends UnityEngine.Behaviour{
            
            
        }
        
        /** RenderMode for the Canvas. */
        enum RenderMode{ ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>, System.IFormattable{
            
            
        }
        
        /** A base class of all colliders. */
        class Collider extends UnityEngine.Component{
            
            
        }
        
        /** Structure used to get information back from a raycast. */
        class RaycastHit extends System.ValueType{
            
            
        }
        
        /** A mesh collider allows you to do between meshes and primitives. */
        class MeshCollider extends UnityEngine.Collider{
            
            
        }
        
        /** Store a collection of Keyframes that can be evaluated over time. */
        class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>{
            
            
        }
        
        /** Gradient used for animating colors. */
        class Gradient extends System.Object implements System.IEquatable$1<UnityEngine.Gradient>{
            
            
        }
        
        /** A class to access the Mesh of the. */
        class MeshFilter extends UnityEngine.Component{
            
            
        }
        
        /** Renders meshes inserted by the MeshFilter or TextMesh. */
        class MeshRenderer extends UnityEngine.Renderer{
            
            
        }
        
        /** A class that allows creating or modifying meshes from scripts. */
        class Mesh extends UnityEngine.Object{
            
            
        }
        
        /** Represents a Sprite object for use in 2D gameplay. */
        class Sprite extends UnityEngine.Object{
            
            
        }
        
        /** Shader scripts used for all rendering. */
        class Shader extends UnityEngine.Object{
            
            
        }
        
        /** Script interface for. */
        class Font extends UnityEngine.Object{
            
            
        }
        
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
        enum KeyCode{ None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        
        /** Types of modifier key that can be active during a keystroke event. */
        enum EventModifiers{ None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
        
        /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
        class AssetBundle extends UnityEngine.Object{
            
            
        }
        
        /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime. */
        class RuntimeAnimatorController extends UnityEngine.Object{
            
            
        }
        
        /** Collider for 2D physics representing an arbitrary polygon defined by its vertices. */
        class PolygonCollider2D extends UnityEngine.Collider2D{
            
            
        }
        
        /** Parent class for collider types used with 2D gameplay. */
        class Collider2D extends UnityEngine.Behaviour{
            
            
        }
        
        /** Rigidbody physics component for 2D sprites. */
        class Rigidbody2D extends UnityEngine.Component{
            
            
        }
        
        /** Control of an object's position through physics simulation. */
        class Rigidbody extends UnityEngine.Component{
            
            
        }
        
        /** A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application. */
        class CanvasRenderer extends UnityEngine.Component{
            
            
        }
        
        /** This enum controls the mode under which the sprite will interact with the masking system. */
        enum SpriteMaskInteraction{ None = 0, VisibleInsideMask = 1, VisibleOutsideMask = 2 }
        
        /** Base class to derive custom property attributes from. Use this to create custom attributes for script variables. */
        class PropertyAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute{
            
            
        }
        
        /** Color space for player settings. */
        enum ColorSpace{ Uninitialized = -1, Gamma = 0, Linear = 1 }
        
        /** Interface to control the Mecanim animation system. */
        class Animator extends UnityEngine.Behaviour{
            
            
        }
        
        
    }
    namespace System.Reflection {
        
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        interface ICustomAttributeProvider{
            
            
        }
        
        
        interface IReflect{
            
            
        }
        
        
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        
        
        enum MemberTypes{ Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        
        
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class Assembly extends System.Object implements System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class Binder extends System.Object{
            
            
        }
        
        
        enum BindingFlags{ Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        
        
        class ParameterModifier extends System.ValueType{
            
            
        }
        
        
        class Module extends System.Object implements System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        enum CallingConventions{ Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        
        
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._FieldInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        
        
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo{
            
            
        }
        
        
        enum TypeAttributes{ VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        
        
        enum GenericParameterAttributes{ None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        
        
        class InterfaceMapping extends System.ValueType{
            
            
        }
        
        
    }
    namespace System.Runtime.InteropServices {
        
        interface _MemberInfo{
            
            
        }
        
        
        interface _Type{
            
            
        }
        
        
        interface _MethodBase{
            
            
        }
        
        
        interface _MethodInfo{
            
            
        }
        
        
        interface _AssemblyName{
            
            
        }
        
        
        interface _Assembly{
            
            
        }
        
        
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute{
            
            
        }
        
        
        interface _Attribute{
            
            
        }
        
        
        interface _Module{
            
            
        }
        
        
        interface _ConstructorInfo{
            
            
        }
        
        
        interface _FieldInfo{
            
            
        }
        
        
        interface _EventInfo{
            
            
        }
        
        
        interface _PropertyInfo{
            
            
        }
        
        
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType{
            
            
        }
        
        
    }
    namespace Unity.Collections {
        
        class NativeArray$1<T> extends System.ValueType implements System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
    }
    namespace System.Runtime.Serialization {
        
        interface ISerializable{
            
            
        }
        
        
        class SerializationInfo extends System.Object{
            
            
        }
        
        
        class StreamingContext extends System.ValueType{
            
            
        }
        
        
        interface IDeserializationCallback{
            
            
        }
        
        
    }
    namespace System.Security {
        
        interface IEvidenceFactory{
            
            
        }
        
        
    }
    namespace System.Globalization {
        
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider{
            
            
        }
        
        
    }
    namespace UnityEngine.ParticleSystem {
        
        class Particle extends System.ValueType{
            
            
        }
        
        
        class PlaybackState extends System.ValueType{
            
            
        }
        
        
        class Trails extends System.ValueType{
            
            
        }
        
        
        class EmitParams extends System.ValueType{
            
            
        }
        
        
        class MainModule extends System.ValueType{
            
            
        }
        
        
        class EmissionModule extends System.ValueType{
            
            
        }
        
        
        class ShapeModule extends System.ValueType{
            
            
        }
        
        
        class VelocityOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class LimitVelocityOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class InheritVelocityModule extends System.ValueType{
            
            
        }
        
        
        class LifetimeByEmitterSpeedModule extends System.ValueType{
            
            
        }
        
        
        class ForceOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class ColorOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class ColorBySpeedModule extends System.ValueType{
            
            
        }
        
        
        class SizeOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class SizeBySpeedModule extends System.ValueType{
            
            
        }
        
        
        class RotationOverLifetimeModule extends System.ValueType{
            
            
        }
        
        
        class RotationBySpeedModule extends System.ValueType{
            
            
        }
        
        
        class ExternalForcesModule extends System.ValueType{
            
            
        }
        
        
        class NoiseModule extends System.ValueType{
            
            
        }
        
        
        class CollisionModule extends System.ValueType{
            
            
        }
        
        
        class TriggerModule extends System.ValueType{
            
            
        }
        
        
        class SubEmittersModule extends System.ValueType{
            
            
        }
        
        
        class TextureSheetAnimationModule extends System.ValueType{
            
            
        }
        
        
        class LightsModule extends System.ValueType{
            
            
        }
        
        
        class TrailModule extends System.ValueType{
            
            
        }
        
        
        class CustomDataModule extends System.ValueType{
            
            
        }
        
        
    }
    namespace UnityEngine.Application {
        
        type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        
        
        type LowMemoryCallback = () => void;
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        
        
        type LogCallback = (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
        
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents. */
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        
        
    }
    namespace UnityEngine.Experimental.Rendering {
        /** Use this format to create either Textures or RenderTextures from scripts. */
        enum GraphicsFormat{ None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150 }
        
        /** Indicates how a Renderer is updated. */
        enum RayTracingMode{ Off = 0, Static = 1, DynamicTransform = 2, DynamicGeometry = 3 }
        
        
    }
    namespace UnityEngine.Rendering {
        /** Texture "dimension" (type). */
        enum TextureDimension{ Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
        
        /** How shadows are cast from this object. */
        enum ShadowCastingMode{ Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
        
        /** Light probe interpolation type. */
        enum LightProbeUsage{ Off = 0, BlendProbes = 1, UseProxyVolume = 2, CustomProvided = 4 }
        
        /** Reflection Probe usage. */
        enum ReflectionProbeUsage{ Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
        
        /** ReflectionProbeBlendInfo contains information required for blending probes. */
        class ReflectionProbeBlendInfo extends System.ValueType{
            
            
        }
        
        /** Types of data that you can encapsulate within a render texture. */
        enum RenderTextureSubElement{ Color = 0, Depth = 1, Stencil = 2, Default = 3 }
        
        /** Spherical harmonics up to the second order (3 bands, 9 coefficients). */
        class SphericalHarmonicsL2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.SphericalHarmonicsL2>{
            
            
        }
        
        /** Blend mode for controlling the blending. */
        enum BlendMode{ Zero = 0, One = 1, DstColor = 2, SrcColor = 3, OneMinusDstColor = 4, SrcAlpha = 5, OneMinusSrcColor = 6, DstAlpha = 7, OneMinusDstAlpha = 8, SrcAlphaSaturate = 9, OneMinusSrcAlpha = 10 }
        
        /** Depth or stencil comparison function. */
        enum CompareFunction{ Disabled = 0, Never = 1, Less = 2, Equal = 3, LessEqual = 4, Greater = 5, NotEqual = 6, GreaterEqual = 7, Always = 8 }
        
        
    }
    namespace UnityEngine.Networking {
        /** The UnityWebRequest object is used to communicate with web servers. */
        class UnityWebRequest extends System.Object implements System.IDisposable{
            /** The string "GET", commonly used as the verb for an HTTP GET request. */
            public static kHttpVerbGET: string;/** The string "HEAD", commonly used as the verb for an HTTP HEAD request. */
            public static kHttpVerbHEAD: string;/** The string "POST", commonly used as the verb for an HTTP POST request. */
            public static kHttpVerbPOST: string;/** The string "PUT", commonly used as the verb for an HTTP PUT request. */
            public static kHttpVerbPUT: string;/** The string "CREATE", commonly used as the verb for an HTTP CREATE request. */
            public static kHttpVerbCREATE: string;/** The string "DELETE", commonly used as the verb for an HTTP DELETE request. */
            public static kHttpVerbDELETE: string;/** If true, any CertificateHandler attached to this UnityWebRequest will have CertificateHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeCertificateHandlerOnDispose(): boolean;
            public set disposeCertificateHandlerOnDispose(value: boolean);
            /** If true, any DownloadHandler attached to this UnityWebRequest will have DownloadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeDownloadHandlerOnDispose(): boolean;
            public set disposeDownloadHandlerOnDispose(value: boolean);
            /** If true, any UploadHandler attached to this UnityWebRequest will have UploadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeUploadHandlerOnDispose(): boolean;
            public set disposeUploadHandlerOnDispose(value: boolean);
            /** Defines the HTTP verb used by this UnityWebRequest, such as GET or POST. */
            public get method(): string;
            public set method(value: string);
            /** A human-readable string describing any system errors encountered by this UnityWebRequest object while handling HTTP requests or responses. (Read Only) */
            public get error(): string;
            
            /** Determines whether this UnityWebRequest will include Expect: 100-Continue in its outgoing request headers. (Default: true). */
            public get useHttpContinue(): boolean;
            public set useHttpContinue(value: boolean);
            /** Defines the target URL for the UnityWebRequest to communicate with. */
            public get url(): string;
            public set url(value: string);
            /** Defines the target URI for the UnityWebRequest to communicate with. */
            public get uri(): System.Uri;
            public set uri(value: System.Uri);
            /** The numeric HTTP response code returned by the server, such as 200, 404 or 500. (Read Only) */
            public get responseCode(): bigint;
            
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of uploading body data to the server. */
            public get uploadProgress(): number;
            
            /** Returns true while a UnityWebRequest’s configuration properties can be altered. (Read Only) */
            public get isModifiable(): boolean;
            
            /** Returns true after the UnityWebRequest has finished communicating with the remote server. (Read Only) */
            public get isDone(): boolean;
            
            /** The result of this UnityWebRequest. */
            public get result(): UnityEngine.Networking.UnityWebRequest.Result;
            
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of downloading body data from the server. (Read Only) */
            public get downloadProgress(): number;
            
            /** Returns the number of bytes of body data the system has uploaded to the remote server. (Read Only) */
            public get uploadedBytes(): bigint;
            
            /** Returns the number of bytes of body data the system has downloaded from the remote server. (Read Only) */
            public get downloadedBytes(): bigint;
            
            /** Indicates the number of redirects which this UnityWebRequest will follow before halting with a “Redirect Limit Exceeded” system error. */
            public get redirectLimit(): number;
            public set redirectLimit(value: number);
            /** Holds a reference to the UploadHandler object which manages body data to be uploaded to the remote server. */
            public get uploadHandler(): UnityEngine.Networking.UploadHandler;
            public set uploadHandler(value: UnityEngine.Networking.UploadHandler);
            /** Holds a reference to a DownloadHandler object, which manages body data received from the remote server by this UnityWebRequest. */
            public get downloadHandler(): UnityEngine.Networking.DownloadHandler;
            public set downloadHandler(value: UnityEngine.Networking.DownloadHandler);
            /** Holds a reference to a CertificateHandler object, which manages certificate validation for this UnityWebRequest. */
            public get certificateHandler(): UnityEngine.Networking.CertificateHandler;
            public set certificateHandler(value: UnityEngine.Networking.CertificateHandler);
            /** Sets UnityWebRequest to attempt to abort after the number of seconds in timeout have passed. */
            public get timeout(): number;
            public set timeout(value: number);
            
            
            public static ClearCookieCache():void;
            
            public static ClearCookieCache($uri: System.Uri):void;
            
            public Dispose():void;
            
            public SendWebRequest():UnityEngine.Networking.UnityWebRequestAsyncOperation;
            
            public Abort():void;
            /** Retrieves the value of a custom request header.
             * @param name Name of the custom request header. Case-insensitive.
             * @returns The value of the custom request header. If no custom header with a matching name has been set, returns an empty string. 
             */
            public GetRequestHeader($name: string):string;
            /** Set a HTTP request header to a custom value. * @param name The key of the header to be set. Case-sensitive.
             * @param value The header's intended value.
             */
            public SetRequestHeader($name: string, $value: string):void;
            /** Retrieves the value of a response header from the latest HTTP response received.
             * @param name The name of the HTTP header to retrieve. Case-insensitive.
             * @returns The value of the HTTP header from the latest HTTP response. If no header with a matching name has been received, or no responses have been received, returns null. 
             */
            public GetResponseHeader($name: string):string;
            
            public GetResponseHeaders():System.Collections.Generic.Dictionary$2<string, string>;
            /** Create a UnityWebRequest for HTTP GET.
             * @param uri The URI of the resource to retrieve via HTTP GET.
             * @returns An object that retrieves data from the uri. 
             */
            public static Get($uri: string):UnityEngine.Networking.UnityWebRequest;
            /** Create a UnityWebRequest for HTTP GET.
             * @param uri The URI of the resource to retrieve via HTTP GET.
             * @returns An object that retrieves data from the uri. 
             */
            public static Get($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured for HTTP DELETE.
             * @param uri The URI to which a DELETE request should be sent.
             * @returns A UnityWebRequest configured to send an HTTP DELETE request. 
             */
            public static Delete($uri: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Delete($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to send a HTTP HEAD request.
             * @param uri The URI to which to send a HTTP HEAD request.
             * @returns A UnityWebRequest configured to transmit a HTTP HEAD request. 
             */
            public static Head($uri: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Head($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
             * @param uri The URI to which the data will be sent.
             * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="http:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
             * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
             */
            public static Put($uri: string, $bodyData: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Put($uri: System.Uri, $bodyData: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
             * @param uri The URI to which the data will be sent.
             * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="http:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
             * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
             */
            public static Put($uri: string, $bodyData: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Put($uri: System.Uri, $bodyData: string):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to send form data to a server via HTTP POST.
             * @param uri The target URI to which form data will be transmitted.
             * @param postData Form body data. Will be URLEncoded prior to transmission.
             * @returns A UnityWebRequest configured to send form data to uri via POST. 
             */
            public static Post($uri: string, $postData: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $postData: string):UnityEngine.Networking.UnityWebRequest;
            /** Create a UnityWebRequest configured to send form data to a server via HTTP POST.
             * @param uri The target URI to which form data will be transmitted.
             * @param formData Form fields or files encapsulated in a WWWForm object, for formatting and transmission to the remote server.
             * @returns A UnityWebRequest configured to send form data to uri via POST. 
             */
            public static Post($uri: string, $formData: UnityEngine.WWWForm):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $formData: UnityEngine.WWWForm):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $formFields: System.Collections.Generic.Dictionary$2<string, string>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $formFields: System.Collections.Generic.Dictionary$2<string, string>):UnityEngine.Networking.UnityWebRequest;
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
             * @param e The text encoding to use.
             */
            public static EscapeURL($s: string):string;
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
             * @param e The text encoding to use.
             */
            public static EscapeURL($s: string, $e: System.Text.Encoding):string;
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
             * @param e The text encoding to use.
             */
            public static UnEscapeURL($s: string):string;
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
             * @param e The text encoding to use.
             */
            public static UnEscapeURL($s: string, $e: System.Text.Encoding):string;
            
            public static SerializeFormSections($multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):System.Array$1<number>;
            
            public static GenerateBoundary():System.Array$1<number>;
            
            public static SerializeSimpleForm($formFields: System.Collections.Generic.Dictionary$2<string, string>):System.Array$1<number>;
            
            public constructor();
            
            public constructor($url: string);
            
            public constructor($uri: System.Uri);
            
            public constructor($url: string, $method: string);
            
            public constructor($uri: System.Uri, $method: string);
            
            public constructor($url: string, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
            
            public constructor($uri: System.Uri, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
            
        }
        
        /** Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
        You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress). */
        class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation{
            
            
        }
        
        /** Helper object for UnityWebRequests. Manages the buffering and transmission of body data during HTTP requests. */
        class UploadHandler extends System.Object implements System.IDisposable{
            
            
        }
        
        /** Manage and process HTTP response body data received from a remote server. */
        class DownloadHandler extends System.Object implements System.IDisposable{
            /** Returns true if this DownloadHandler has been informed by its parent UnityWebRequest that all data has been received, and this DownloadHandler has completed any necessary post-download processing. (Read Only) */
            public get isDone(): boolean;
            
            /** Error message describing a failure that occurred inside the download handler. */
            public get error(): string;
            
            /** Returns the raw bytes downloaded from the remote server, or null. (Read Only) */
            public get data(): System.Array$1<number>;
            
            /** Convenience property. Returns the bytes from data interpreted as a UTF8 string. (Read Only) */
            public get text(): string;
            
            
            
            public Dispose():void;
            
        }
        
        /** Responsible for rejecting or accepting certificates received on https requests. */
        class CertificateHandler extends System.Object implements System.IDisposable{
            
            
        }
        
        
        interface IMultipartFormSection{
            
            
        }
        
        /** A DownloadHandler subclass specialized for downloading audio data for use as AudioClip objects. */
        class DownloadHandlerAudioClip extends UnityEngine.Networking.DownloadHandler implements System.IDisposable{
            /** Returns the downloaded AudioClip, or null. (Read Only) */
            public get audioClip(): UnityEngine.AudioClip;
            
            /** Create streaming AudioClip. */
            public get streamAudio(): boolean;
            public set streamAudio(value: boolean);
            /** Create AudioClip that is compressed in memory. */
            public get compressed(): boolean;
            public set compressed(value: boolean);
            
            /** Returns the downloaded AudioClip, or null.
             * @param www A finished UnityWebRequest object with DownloadHandlerAudioClip attached.
             * @returns The same as DownloadHandlerAudioClip.audioClip 
             */
            public static GetContent($www: UnityEngine.Networking.UnityWebRequest):UnityEngine.AudioClip;
            
            public constructor($url: string, $audioType: UnityEngine.AudioType);
            
            public constructor($uri: System.Uri, $audioType: UnityEngine.AudioType);
            
            public constructor();
            
        }
        
        /** A DownloadHandler subclass specialized for downloading images for use as Texture objects. */
        class DownloadHandlerTexture extends UnityEngine.Networking.DownloadHandler implements System.IDisposable{
            /** Returns the downloaded Texture, or null. (Read Only) */
            public get texture(): UnityEngine.Texture2D;
            
            
            /** Returns the downloaded Texture, or null.
             * @param www A finished UnityWebRequest object with DownloadHandlerTexture attached.
             * @returns The same as DownloadHandlerTexture.texture 
             */
            public static GetContent($www: UnityEngine.Networking.UnityWebRequest):UnityEngine.Texture2D;
            
            public constructor();
            
            public constructor($readable: boolean);
            
        }
        
        /** Helpers for downloading image files into Textures using UnityWebRequest. */
        class UnityWebRequestTexture extends System.Object{
            
            /** Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
             * @param uri The URI of the image to download.
             * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
             * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture. 
             */
            public static GetTexture($uri: string):UnityEngine.Networking.UnityWebRequest;
            
            public static GetTexture($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
             * @param uri The URI of the image to download.
             * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
             * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture. 
             */
            public static GetTexture($uri: string, $nonReadable: boolean):UnityEngine.Networking.UnityWebRequest;
            
            public static GetTexture($uri: System.Uri, $nonReadable: boolean):UnityEngine.Networking.UnityWebRequest;
            
        }
        
        
    }
    namespace UnityEngine.Networking.UnityWebRequest {
        
        enum Result{ InProgress = 0, Success = 1, ConnectionError = 2, ProtocolError = 3, DataProcessingError = 4 }
        
        
    }
    namespace System.Text {
        
        class Encoding extends System.Object implements System.ICloneable{
            
            public get BodyName(): string;
            
            
            public get EncodingName(): string;
            
            
            public get HeaderName(): string;
            
            
            public get WebName(): string;
            
            
            public get WindowsCodePage(): number;
            
            
            public get IsBrowserDisplay(): boolean;
            
            
            public get IsBrowserSave(): boolean;
            
            
            public get IsMailNewsDisplay(): boolean;
            
            
            public get IsMailNewsSave(): boolean;
            
            
            public get IsSingleByte(): boolean;
            
            
            public get EncoderFallback(): System.Text.EncoderFallback;
            public set EncoderFallback(value: System.Text.EncoderFallback);
            
            public get DecoderFallback(): System.Text.DecoderFallback;
            public set DecoderFallback(value: System.Text.DecoderFallback);
            
            public get IsReadOnly(): boolean;
            
            
            public static get ASCII(): System.Text.Encoding;
            
            
            public get CodePage(): number;
            
            
            public static get Default(): System.Text.Encoding;
            
            
            public static get Unicode(): System.Text.Encoding;
            
            
            public static get BigEndianUnicode(): System.Text.Encoding;
            
            
            public static get UTF7(): System.Text.Encoding;
            
            
            public static get UTF8(): System.Text.Encoding;
            
            
            public static get UTF32(): System.Text.Encoding;
            
            
            
            public static Convert($srcEncoding: System.Text.Encoding, $dstEncoding: System.Text.Encoding, $bytes: System.Array$1<number>):System.Array$1<number>;
            
            public static Convert($srcEncoding: System.Text.Encoding, $dstEncoding: System.Text.Encoding, $bytes: System.Array$1<number>, $index: number, $count: number):System.Array$1<number>;
            
            public static RegisterProvider($provider: System.Text.EncodingProvider):void;
            
            public static GetEncoding($codepage: number):System.Text.Encoding;
            
            public static GetEncoding($codepage: number, $encoderFallback: System.Text.EncoderFallback, $decoderFallback: System.Text.DecoderFallback):System.Text.Encoding;
            
            public static GetEncoding($name: string):System.Text.Encoding;
            
            public static GetEncoding($name: string, $encoderFallback: System.Text.EncoderFallback, $decoderFallback: System.Text.DecoderFallback):System.Text.Encoding;
            
            public static GetEncodings():System.Array$1<System.Text.EncodingInfo>;
            
            public GetPreamble():System.Array$1<number>;
            
            public Clone():any;
            
            public GetByteCount($chars: System.Array$1<number>):number;
            
            public GetByteCount($s: string):number;
            
            public GetByteCount($chars: System.Array$1<number>, $index: number, $count: number):number;
            
            public GetBytes($chars: System.Array$1<number>):System.Array$1<number>;
            
            public GetBytes($chars: System.Array$1<number>, $index: number, $count: number):System.Array$1<number>;
            
            public GetBytes($chars: System.Array$1<number>, $charIndex: number, $charCount: number, $bytes: System.Array$1<number>, $byteIndex: number):number;
            
            public GetBytes($s: string):System.Array$1<number>;
            
            public GetBytes($s: string, $charIndex: number, $charCount: number, $bytes: System.Array$1<number>, $byteIndex: number):number;
            
            public GetCharCount($bytes: System.Array$1<number>):number;
            
            public GetCharCount($bytes: System.Array$1<number>, $index: number, $count: number):number;
            
            public GetChars($bytes: System.Array$1<number>):System.Array$1<number>;
            
            public GetChars($bytes: System.Array$1<number>, $index: number, $count: number):System.Array$1<number>;
            
            public GetChars($bytes: System.Array$1<number>, $byteIndex: number, $byteCount: number, $chars: System.Array$1<number>, $charIndex: number):number;
            
            public IsAlwaysNormalized():boolean;
            
            public IsAlwaysNormalized($form: System.Text.NormalizationForm):boolean;
            
            public GetDecoder():System.Text.Decoder;
            
            public GetEncoder():System.Text.Encoder;
            
            public GetMaxByteCount($charCount: number):number;
            
            public GetMaxCharCount($byteCount: number):number;
            
            public GetString($bytes: System.Array$1<number>):string;
            
            public GetString($bytes: System.Array$1<number>, $index: number, $count: number):string;
            
        }
        
        
        class EncodingProvider extends System.Object{
            
            
        }
        
        
        class EncoderFallback extends System.Object{
            
            
        }
        
        
        class DecoderFallback extends System.Object{
            
            
        }
        
        
        class EncodingInfo extends System.Object{
            
            
        }
        
        
        enum NormalizationForm{ FormC = 1, FormD = 2, FormKC = 5, FormKD = 6 }
        
        
        class Decoder extends System.Object{
            
            
        }
        
        
        class Encoder extends System.Object{
            
            
        }
        
        
    }
    namespace System.IO {
        
        class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable{
            
            public get Exists(): boolean;
            
            
            public get Name(): string;
            
            
            public get Parent(): System.IO.DirectoryInfo;
            
            
            public get Root(): System.IO.DirectoryInfo;
            
            
            
            public Create():void;
            
            public CreateSubdirectory($path: string):System.IO.DirectoryInfo;
            
            public GetFiles():System.Array$1<System.IO.FileInfo>;
            
            public GetFiles($searchPattern: string):System.Array$1<System.IO.FileInfo>;
            
            public GetDirectories():System.Array$1<System.IO.DirectoryInfo>;
            
            public GetDirectories($searchPattern: string):System.Array$1<System.IO.DirectoryInfo>;
            
            public GetFileSystemInfos():System.Array$1<System.IO.FileSystemInfo>;
            
            public GetFileSystemInfos($searchPattern: string):System.Array$1<System.IO.FileSystemInfo>;
            
            public GetFileSystemInfos($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.FileSystemInfo>;
            
            public Delete():void;
            
            public Delete($recursive: boolean):void;
            
            public MoveTo($destDirName: string):void;
            
            public GetDirectories($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.DirectoryInfo>;
            
            public GetFiles($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.FileInfo>;
            
            public Create($directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public CreateSubdirectory($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):System.IO.DirectoryInfo;
            
            public GetAccessControl():System.Security.AccessControl.DirectorySecurity;
            
            public GetAccessControl($includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.DirectorySecurity;
            
            public SetAccessControl($directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public EnumerateDirectories():System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateDirectories($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateDirectories($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateFiles():System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFiles($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFiles($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFileSystemInfos():System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public EnumerateFileSystemInfos($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public EnumerateFileSystemInfos($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public constructor($path: string);
            
            public constructor();
            
        }
        
        
        class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable{
            
            
        }
        
        
        class FileInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable{
            
            public get Name(): string;
            
            
            public get Length(): bigint;
            
            
            public get DirectoryName(): string;
            
            
            public get Directory(): System.IO.DirectoryInfo;
            
            
            public get IsReadOnly(): boolean;
            public set IsReadOnly(value: boolean);
            
            public get Exists(): boolean;
            
            
            
            public GetAccessControl():System.Security.AccessControl.FileSecurity;
            
            public GetAccessControl($includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.FileSecurity;
            
            public SetAccessControl($fileSecurity: System.Security.AccessControl.FileSecurity):void;
            
            public OpenText():System.IO.StreamReader;
            
            public CreateText():System.IO.StreamWriter;
            
            public AppendText():System.IO.StreamWriter;
            
            public CopyTo($destFileName: string):System.IO.FileInfo;
            
            public CopyTo($destFileName: string, $overwrite: boolean):System.IO.FileInfo;
            
            public Create():System.IO.FileStream;
            
            public Decrypt():void;
            
            public Encrypt():void;
            
            public Open($mode: System.IO.FileMode):System.IO.FileStream;
            
            public Open($mode: System.IO.FileMode, $access: System.IO.FileAccess):System.IO.FileStream;
            
            public Open($mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare):System.IO.FileStream;
            
            public OpenRead():System.IO.FileStream;
            
            public OpenWrite():System.IO.FileStream;
            
            public MoveTo($destFileName: string):void;
            
            public Replace($destinationFileName: string, $destinationBackupFileName: string):System.IO.FileInfo;
            
            public Replace($destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean):System.IO.FileInfo;
            
            public constructor($fileName: string);
            
            public constructor();
            
        }
        
        
        enum SearchOption{ TopDirectoryOnly = 0, AllDirectories = 1 }
        
        
        class StreamReader extends System.IO.TextReader implements System.IDisposable{
            
            
        }
        
        
        class TextReader extends System.MarshalByRefObject implements System.IDisposable{
            
            
        }
        
        
        class StreamWriter extends System.IO.TextWriter implements System.IDisposable{
            
            
        }
        
        
        class TextWriter extends System.MarshalByRefObject implements System.IDisposable{
            
            
        }
        
        
        class FileStream extends System.IO.Stream implements System.IDisposable{
            
            
        }
        
        
        class Stream extends System.MarshalByRefObject implements System.IDisposable{
            
            
        }
        
        
        enum FileMode{ CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        
        
        enum FileAccess{ Read = 1, Write = 2, ReadWrite = 3 }
        
        
        enum FileShare{ None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        
        
        class Directory extends System.Object{
            
            
            public static GetFiles($path: string):System.Array$1<string>;
            
            public static GetFiles($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetFiles($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static GetDirectories($path: string):System.Array$1<string>;
            
            public static GetDirectories($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetDirectories($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static EnumerateDirectories($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateDirectories($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateDirectories($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static GetDirectoryRoot($path: string):string;
            
            public static CreateDirectory($path: string):System.IO.DirectoryInfo;
            
            public static CreateDirectory($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):System.IO.DirectoryInfo;
            
            public static Delete($path: string):void;
            
            public static Delete($path: string, $recursive: boolean):void;
            
            public static Exists($path: string):boolean;
            
            public static GetLastAccessTime($path: string):Date;
            
            public static GetLastAccessTimeUtc($path: string):Date;
            
            public static GetLastWriteTime($path: string):Date;
            
            public static GetLastWriteTimeUtc($path: string):Date;
            
            public static GetCreationTime($path: string):Date;
            
            public static GetCreationTimeUtc($path: string):Date;
            
            public static GetCurrentDirectory():string;
            
            public static GetLogicalDrives():System.Array$1<string>;
            
            public static GetParent($path: string):System.IO.DirectoryInfo;
            
            public static Move($sourceDirName: string, $destDirName: string):void;
            
            public static SetAccessControl($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public static SetCreationTime($path: string, $creationTime: Date):void;
            
            public static SetCreationTimeUtc($path: string, $creationTimeUtc: Date):void;
            
            public static SetCurrentDirectory($path: string):void;
            
            public static SetLastAccessTime($path: string, $lastAccessTime: Date):void;
            
            public static SetLastAccessTimeUtc($path: string, $lastAccessTimeUtc: Date):void;
            
            public static SetLastWriteTime($path: string, $lastWriteTime: Date):void;
            
            public static SetLastWriteTimeUtc($path: string, $lastWriteTimeUtc: Date):void;
            
            public static GetAccessControl($path: string, $includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.DirectorySecurity;
            
            public static GetAccessControl($path: string):System.Security.AccessControl.DirectorySecurity;
            
        }
        
        
        class File extends System.Object{
            
            
            public static AppendAllText($path: string, $contents: string):void;
            
            public static AppendAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static AppendText($path: string):System.IO.StreamWriter;
            
            public static Copy($sourceFileName: string, $destFileName: string):void;
            
            public static Copy($sourceFileName: string, $destFileName: string, $overwrite: boolean):void;
            
            public static Create($path: string):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions, $fileSecurity: System.Security.AccessControl.FileSecurity):System.IO.FileStream;
            
            public static CreateText($path: string):System.IO.StreamWriter;
            
            public static Delete($path: string):void;
            
            public static Exists($path: string):boolean;
            
            public static GetAccessControl($path: string):System.Security.AccessControl.FileSecurity;
            
            public static GetAccessControl($path: string, $includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.FileSecurity;
            
            public static GetAttributes($path: string):System.IO.FileAttributes;
            
            public static GetCreationTime($path: string):Date;
            
            public static GetCreationTimeUtc($path: string):Date;
            
            public static GetLastAccessTime($path: string):Date;
            
            public static GetLastAccessTimeUtc($path: string):Date;
            
            public static GetLastWriteTime($path: string):Date;
            
            public static GetLastWriteTimeUtc($path: string):Date;
            
            public static Move($sourceFileName: string, $destFileName: string):void;
            
            public static Open($path: string, $mode: System.IO.FileMode):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare):System.IO.FileStream;
            
            public static OpenRead($path: string):System.IO.FileStream;
            
            public static OpenText($path: string):System.IO.StreamReader;
            
            public static OpenWrite($path: string):System.IO.FileStream;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string):void;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean):void;
            
            public static SetAccessControl($path: string, $fileSecurity: System.Security.AccessControl.FileSecurity):void;
            
            public static SetAttributes($path: string, $fileAttributes: System.IO.FileAttributes):void;
            
            public static SetCreationTime($path: string, $creationTime: Date):void;
            
            public static SetCreationTimeUtc($path: string, $creationTimeUtc: Date):void;
            
            public static SetLastAccessTime($path: string, $lastAccessTime: Date):void;
            
            public static SetLastAccessTimeUtc($path: string, $lastAccessTimeUtc: Date):void;
            
            public static SetLastWriteTime($path: string, $lastWriteTime: Date):void;
            
            public static SetLastWriteTimeUtc($path: string, $lastWriteTimeUtc: Date):void;
            
            public static ReadAllBytes($path: string):System.Array$1<number>;
            
            public static ReadAllLines($path: string):System.Array$1<string>;
            
            public static ReadAllLines($path: string, $encoding: System.Text.Encoding):System.Array$1<string>;
            
            public static ReadAllText($path: string):string;
            
            public static ReadAllText($path: string, $encoding: System.Text.Encoding):string;
            
            public static WriteAllBytes($path: string, $bytes: System.Array$1<number>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllText($path: string, $contents: string):void;
            
            public static WriteAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static Encrypt($path: string):void;
            
            public static Decrypt($path: string):void;
            
            public static ReadLines($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static ReadLines($path: string, $encoding: System.Text.Encoding):System.Collections.Generic.IEnumerable$1<string>;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
        }
        
        
        enum FileOptions{ None = 0, Encrypted = 16384, DeleteOnClose = 67108864, SequentialScan = 134217728, RandomAccess = 268435456, Asynchronous = 1073741824, WriteThrough = -2147483648 }
        
        
        enum FileAttributes{ Archive = 32, Compressed = 2048, Device = 64, Directory = 16, Encrypted = 16384, Hidden = 2, Normal = 128, NotContentIndexed = 8192, Offline = 4096, ReadOnly = 1, ReparsePoint = 1024, SparseFile = 512, System = 4, Temporary = 256, IntegrityStream = 32768, NoScrubData = 131072 }
        
        
    }
    namespace System.Security.AccessControl {
        
        class DirectorySecurity extends System.Security.AccessControl.FileSystemSecurity{
            
            
        }
        
        
        class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity{
            
            
        }
        
        
        class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity{
            
            
        }
        
        
        class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity{
            
            
        }
        
        
        class ObjectSecurity extends System.Object{
            
            
        }
        
        
        enum AccessControlSections{ None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }
        
        
        class FileSecurity extends System.Security.AccessControl.FileSystemSecurity{
            
            
        }
        
        
    }
    namespace System.Collections.ObjectModel {
        
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
    }
    namespace Panthea.UI {
        
        class UIKit extends System.Object{
            
            
            public static LoadPackage($path: string):void;
            
            public constructor();
            
        }
        
        
    }
    
        
        class GameEntry extends UnityEngine.MonoBehaviour{
            
            public isDebug: boolean;
            public debugPort: number;
            public jsEnv: Puerts.JsEnv;
            public JsUpdate: System.Action;
            public JsOnDestroy: System.Action;
            public static get Inst(): GameEntry;
            
            
            
            public RegisterUpdate($action: System.Action):void;
            
            public RegisterDestory($action: System.Action):void;
            
            public constructor();
            
        }
        
        
    
    namespace Puerts {
        
        class JsEnv extends System.Object implements System.IDisposable{
            
            
        }
        
        
    }
    namespace FairyGUI {
        
        class TMPFont extends FairyGUI.BaseFont{
            
            public get fontAsset(): TMPro.TMP_FontAsset;
            public set fontAsset(value: TMPro.TMP_FontAsset);
            
            public get fontWeight(): TMPro.FontWeight;
            public set fontWeight(value: TMPro.FontWeight);
            
            
            public constructor();
            
        }
        
        
        class BaseFont extends System.Object{
            
            public name: string;
            public mainTexture: FairyGUI.NTexture;
            public canTint: boolean;
            public customBold: boolean;
            public customBoldAndItalic: boolean;
            public customOutline: boolean;
            public shader: string;
            public keepCrisp: boolean;
            public version: number;
            
            public UpdateGraphics($graphics: FairyGUI.NGraphics):void;
            
            public SetFormat($format: FairyGUI.TextFormat, $fontSizeScale: number):void;
            
            public PrepareCharacters($text: string):void;
            
            public GetGlyph($ch: number, $width: $Ref<number>, $height: $Ref<number>, $baseline: $Ref<number>):boolean;
            
            public DrawGlyph($x: number, $y: number, $vertList: System.Collections.Generic.List$1<UnityEngine.Vector3>, $uvList: System.Collections.Generic.List$1<UnityEngine.Vector2>, $uv2List: System.Collections.Generic.List$1<UnityEngine.Vector2>, $colList: System.Collections.Generic.List$1<UnityEngine.Color32>):number;
            
            public DrawLine($x: number, $y: number, $width: number, $fontSize: number, $type: number, $vertList: System.Collections.Generic.List$1<UnityEngine.Vector3>, $uvList: System.Collections.Generic.List$1<UnityEngine.Vector2>, $uv2List: System.Collections.Generic.List$1<UnityEngine.Vector2>, $colList: System.Collections.Generic.List$1<UnityEngine.Color32>):number;
            
            public HasCharacter($ch: number):boolean;
            
            public GetLineHeight($size: number):number;
            
            public Dispose():void;
            
            public constructor();
            
        }
        
        
        class NGraphics extends System.Object implements FairyGUI.IMeshFactory{
            
            public blendMode: FairyGUI.BlendMode;
            public dontClip: boolean;
            public get gameObject(): UnityEngine.GameObject;
            
            
            public get meshFilter(): UnityEngine.MeshFilter;
            
            
            public get meshRenderer(): UnityEngine.MeshRenderer;
            
            
            public get mesh(): UnityEngine.Mesh;
            
            
            public get meshFactory(): FairyGUI.IMeshFactory;
            public set meshFactory(value: FairyGUI.IMeshFactory);
            
            public get contentRect(): UnityEngine.Rect;
            public set contentRect(value: UnityEngine.Rect);
            
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get materialKeywords(): System.Array$1<string>;
            public set materialKeywords(value: System.Array$1<string>);
            
            public get enabled(): boolean;
            public set enabled(value: boolean);
            
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get vertexMatrix(): FairyGUI.NGraphics.VertexMatrix;
            public set vertexMatrix(value: FairyGUI.NGraphics.VertexMatrix);
            
            public get materialPropertyBlock(): UnityEngine.MaterialPropertyBlock;
            
            
            
            public add_meshModifier($value: System.Action):void;
            
            public remove_meshModifier($value: System.Action):void;
            
            public SetShaderAndTexture($shader: string, $texture: FairyGUI.NTexture):void;
            
            public SetMaterial($material: UnityEngine.Material):void;
            
            public ToggleKeyword($keyword: string, $enabled: boolean):void;
            
            public Tint():void;
            
            public SetMeshDirty():void;
            
            public UpdateMesh():boolean;
            
            public Dispose():void;
            
            public Update($context: FairyGUI.UpdateContext, $alpha: number, $grayed: boolean):void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor($gameObject: UnityEngine.GameObject);
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
        }
        
        
        interface IMeshFactory{
            
            
            OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class TextFormat extends System.Object{
            
            public faceDilate: number;
            public outlineSoftness: number;
            public underlaySoftness: number;
            public size: number;
            public font: string;
            public color: UnityEngine.Color;
            public lineSpacing: number;
            public letterSpacing: number;
            public bold: boolean;
            public underline: boolean;
            public italic: boolean;
            public strikethrough: boolean;
            public gradientColor: System.Array$1<UnityEngine.Color32>;
            public align: FairyGUI.AlignType;
            public specialStyle: FairyGUI.TextFormat.SpecialStyle;
            public outline: number;
            public outlineColor: UnityEngine.Color;
            public shadowOffset: UnityEngine.Vector2;
            public shadowColor: UnityEngine.Color;
            
            public SetColor($value: number):void;
            
            public EqualStyle($aFormat: FairyGUI.TextFormat):boolean;
            
            public CopyFrom($source: FairyGUI.TextFormat):void;
            
            public FillVertexColors($vertexColors: System.Array$1<UnityEngine.Color32>):void;
            
            public constructor();
            
        }
        
        
        enum AlignType{ Left = 0, Center = 1, Right = 2 }
        
        
        class BlendModeUtils extends System.Object{
            
            public static Factors: System.Array$1<FairyGUI.BlendModeUtils.BlendFactor>;
            
            public static Apply($mat: UnityEngine.Material, $blendMode: FairyGUI.BlendMode):void;
            
            public static Override($blendMode: FairyGUI.BlendMode, $srcFactor: UnityEngine.Rendering.BlendMode, $dstFactor: UnityEngine.Rendering.BlendMode):void;
            
            public constructor();
            
        }
        
        
        enum BlendMode{ Normal = 0, None = 1, Add = 2, Multiply = 3, Screen = 4, Erase = 5, Mask = 6, Below = 7, Off = 8, One_OneMinusSrcAlpha = 9, Custom1 = 10, Custom2 = 11, Custom3 = 12 }
        
        
        class CaptureCamera extends UnityEngine.MonoBehaviour{
            
            public cachedTransform: UnityEngine.Transform;
            public cachedCamera: UnityEngine.Camera;
            public static Name: string;
            public static LayerName: string;
            public static HiddenLayerName: string;
            public static get layer(): number;
            
            
            public static get hiddenLayer(): number;
            
            
            
            public static CheckMain():void;
            
            public static CreateRenderTexture($width: number, $height: number, $stencilSupport: boolean):UnityEngine.RenderTexture;
            
            public static Capture($target: FairyGUI.DisplayObject, $texture: UnityEngine.RenderTexture, $contentHeight: number, $offset: UnityEngine.Vector2):void;
            
            public constructor();
            
        }
        
        
        class DisplayObject extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public name: string;
            public gOwner: FairyGUI.GObject;
            public id: number;
            public get parent(): FairyGUI.Container;
            
            
            public get gameObject(): UnityEngine.GameObject;
            
            
            public get cachedTransform(): UnityEngine.Transform;
            
            
            public get graphics(): FairyGUI.NGraphics;
            
            
            public get paintingGraphics(): FairyGUI.NGraphics;
            
            
            public get onClick(): FairyGUI.EventListener;
            
            
            public get onRightClick(): FairyGUI.EventListener;
            
            
            public get onTouchBegin(): FairyGUI.EventListener;
            
            
            public get onTouchMove(): FairyGUI.EventListener;
            
            
            public get onTouchEnd(): FairyGUI.EventListener;
            
            
            public get onRollOver(): FairyGUI.EventListener;
            
            
            public get onRollOut(): FairyGUI.EventListener;
            
            
            public get onMouseWheel(): FairyGUI.EventListener;
            
            
            public get onAddedToStage(): FairyGUI.EventListener;
            
            
            public get onRemovedFromStage(): FairyGUI.EventListener;
            
            
            public get onKeyDown(): FairyGUI.EventListener;
            
            
            public get onClickLink(): FairyGUI.EventListener;
            
            
            public get onFocusIn(): FairyGUI.EventListener;
            
            
            public get onFocusOut(): FairyGUI.EventListener;
            
            
            public get alpha(): number;
            public set alpha(value: number);
            
            public get grayed(): boolean;
            public set grayed(value: boolean);
            
            public get visible(): boolean;
            public set visible(value: boolean);
            
            public get x(): number;
            public set x(value: number);
            
            public get y(): number;
            public set y(value: number);
            
            public get z(): number;
            public set z(value: number);
            
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            
            public get width(): number;
            public set width(value: number);
            
            public get height(): number;
            public set height(value: number);
            
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            
            public get scaleX(): number;
            public set scaleX(value: number);
            
            public get scaleY(): number;
            public set scaleY(value: number);
            
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            
            public get rotation(): number;
            public set rotation(value: number);
            
            public get rotationX(): number;
            public set rotationX(value: number);
            
            public get rotationY(): number;
            public set rotationY(value: number);
            
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            
            public get perspective(): boolean;
            public set perspective(value: boolean);
            
            public get focalLength(): number;
            public set focalLength(value: number);
            
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            
            public get location(): UnityEngine.Vector3;
            public set location(value: UnityEngine.Vector3);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get renderingOrder(): number;
            public set renderingOrder(value: number);
            
            public get layer(): number;
            public set layer(value: number);
            
            public get focusable(): boolean;
            public set focusable(value: boolean);
            
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            
            public get focused(): boolean;
            
            
            public get cursor(): string;
            public set cursor(value: string);
            
            public get isDisposed(): boolean;
            
            
            public get topmost(): FairyGUI.Container;
            
            
            public get stage(): FairyGUI.Stage;
            
            
            public get worldSpaceContainer(): FairyGUI.Container;
            
            
            public get touchable(): boolean;
            public set touchable(value: boolean);
            
            public get touchDisabled(): boolean;
            
            
            public get paintingMode(): boolean;
            
            
            public get cacheAsBitmap(): boolean;
            public set cacheAsBitmap(value: boolean);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            public get home(): UnityEngine.Transform;
            public set home(value: UnityEngine.Transform);
            
            
            public add_onPaint($value: System.Action):void;
            
            public remove_onPaint($value: System.Action):void;
            
            public SetXY($xv: number, $yv: number):void;
            
            public SetPosition($xv: number, $yv: number, $zv: number):void;
            
            public SetSize($wv: number, $hv: number):void;
            
            public EnsureSizeCorrect():void;
            
            public SetScale($xv: number, $yv: number):void;
            
            public EnterPaintingMode():void;
            
            public EnterPaintingMode($requestorId: number, $extend: System.Nullable$1<FairyGUI.Margin>):void;
            
            public EnterPaintingMode($requestorId: number, $extend: System.Nullable$1<FairyGUI.Margin>, $scale: number):void;
            
            public LeavePaintingMode($requestorId: number):void;
            
            public GetScreenShot($extend: System.Nullable$1<FairyGUI.Margin>, $scale: number):UnityEngine.Texture2D;
            
            public GetBounds($targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            
            public GlobalToLocal($point: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public LocalToGlobal($point: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public WorldToLocal($worldPoint: UnityEngine.Vector3, $direction: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public LocalToWorld($localPoint: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public TransformPoint($point: UnityEngine.Vector2, $targetSpace: FairyGUI.DisplayObject):UnityEngine.Vector2;
            
            public TransformRect($rect: UnityEngine.Rect, $targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            
            public RemoveFromParent():void;
            
            public InvalidateBatchingState():void;
            
            public Update($context: FairyGUI.UpdateContext):void;
            
            public Dispose():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class EventDispatcher extends System.Object implements FairyGUI.IEventDispatcher{
            
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddCapture($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveCapture($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListeners():void;
            
            public RemoveEventListeners($strType: string):void;
            
            public hasEventListeners($strType: string):boolean;
            
            public isDispatching($strType: string):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public BubbleEvent($strType: string, $data: any):boolean;
            
            public BroadcastEvent($strType: string, $data: any):boolean;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        interface IEventDispatcher{
            
            
            AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            DispatchEvent($strType: string):boolean;
            
            DispatchEvent($strType: string, $data: any):boolean;
            
            DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class Container extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher{
            
            public renderMode: UnityEngine.RenderMode;
            public renderCamera: UnityEngine.Camera;
            public opaque: boolean;
            public clipSoftness: System.Nullable$1<UnityEngine.Vector4>;
            public hitArea: FairyGUI.IHitTest;
            public touchChildren: boolean;
            public reversedMask: boolean;
            public get numChildren(): number;
            
            
            public get clipRect(): System.Nullable$1<UnityEngine.Rect>;
            public set clipRect(value: System.Nullable$1<UnityEngine.Rect>);
            
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            
            
            public add_onUpdate($value: System.Action):void;
            
            public remove_onUpdate($value: System.Action):void;
            
            public AddChild($child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            
            public AddChildAt($child: FairyGUI.DisplayObject, $index: number):FairyGUI.DisplayObject;
            
            public Contains($child: FairyGUI.DisplayObject):boolean;
            
            public GetChildAt($index: number):FairyGUI.DisplayObject;
            
            public GetChild($name: string):FairyGUI.DisplayObject;
            
            public GetChildren():System.Array$1<FairyGUI.DisplayObject>;
            
            public GetChildIndex($child: FairyGUI.DisplayObject):number;
            
            public RemoveChild($child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            
            public RemoveChild($child: FairyGUI.DisplayObject, $dispose: boolean):FairyGUI.DisplayObject;
            
            public RemoveChildAt($index: number):FairyGUI.DisplayObject;
            
            public RemoveChildAt($index: number, $dispose: boolean):FairyGUI.DisplayObject;
            
            public RemoveChildren():void;
            
            public RemoveChildren($beginIndex: number, $endIndex: number, $dispose: boolean):void;
            
            public SetChildIndex($child: FairyGUI.DisplayObject, $index: number):void;
            
            public SwapChildren($child1: FairyGUI.DisplayObject, $child2: FairyGUI.DisplayObject):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public ChangeChildrenOrder($indice: System.Collections.Generic.IList$1<number>, $objs: System.Collections.Generic.IList$1<FairyGUI.DisplayObject>):void;
            
            public GetDescendants($backward: boolean):System.Collections.Generic.IEnumerator$1<FairyGUI.DisplayObject>;
            
            public CreateGraphics():void;
            
            public GetRenderCamera():UnityEngine.Camera;
            
            public HitTest($stagePoint: UnityEngine.Vector2, $forTouch: boolean):FairyGUI.DisplayObject;
            
            public IsAncestorOf($obj: FairyGUI.DisplayObject):boolean;
            
            public InvalidateBatchingState($childrenChanged: boolean):void;
            
            public SetChildrenLayer($value: number):void;
            
            public constructor();
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public InvalidateBatchingState():void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        interface IHitTest{
            
            
            HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
        }
        
        
        class UpdateContext extends System.Object{
            
            public clipped: boolean;
            public clipInfo: FairyGUI.UpdateContext.ClipInfo;
            public renderingOrder: number;
            public batchingDepth: number;
            public rectMaskDepth: number;
            public stencilReferenceValue: number;
            public stencilCompareValue: number;
            public alpha: number;
            public grayed: boolean;
            public static current: FairyGUI.UpdateContext;
            public static working: boolean;
            
            public static add_OnBegin($value: System.Action):void;
            
            public static remove_OnBegin($value: System.Action):void;
            
            public static add_OnEnd($value: System.Action):void;
            
            public static remove_OnEnd($value: System.Action):void;
            
            public Begin():void;
            
            public End():void;
            
            public EnterClipping($clipId: number, $clipRect: UnityEngine.Rect, $softness: System.Nullable$1<UnityEngine.Vector4>):void;
            
            public EnterClipping($clipId: number, $reversedMask: boolean):void;
            
            public LeaveClipping():void;
            
            public EnterPaintingMode():void;
            
            public LeavePaintingMode():void;
            
            public ApplyClippingProperties($mat: UnityEngine.Material, $isStdMaterial: boolean):void;
            
            public ApplyAlphaMaskProperties($mat: UnityEngine.Material, $erasing: boolean):void;
            
            public constructor();
            
        }
        
        
        class GObject extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public name: string;
            public data: any;
            public sourceWidth: number;
            public sourceHeight: number;
            public initWidth: number;
            public initHeight: number;
            public minWidth: number;
            public maxWidth: number;
            public minHeight: number;
            public maxHeight: number;
            public dragBounds: System.Nullable$1<UnityEngine.Rect>;
            public packageItem: FairyGUI.PackageItem;
            public get id(): string;
            
            
            public get relations(): FairyGUI.Relations;
            
            
            public get parent(): FairyGUI.GComponent;
            
            
            public get displayObject(): FairyGUI.DisplayObject;
            
            
            public static get draggingObject(): FairyGUI.GObject;
            
            
            public get onClick(): FairyGUI.EventListener;
            
            
            public get onRightClick(): FairyGUI.EventListener;
            
            
            public get onTouchBegin(): FairyGUI.EventListener;
            
            
            public get onTouchMove(): FairyGUI.EventListener;
            
            
            public get onTouchEnd(): FairyGUI.EventListener;
            
            
            public get onRollOver(): FairyGUI.EventListener;
            
            
            public get onRollOut(): FairyGUI.EventListener;
            
            
            public get onAddedToStage(): FairyGUI.EventListener;
            
            
            public get onRemovedFromStage(): FairyGUI.EventListener;
            
            
            public get onKeyDown(): FairyGUI.EventListener;
            
            
            public get onClickLink(): FairyGUI.EventListener;
            
            
            public get onPositionChanged(): FairyGUI.EventListener;
            
            
            public get onSizeChanged(): FairyGUI.EventListener;
            
            
            public get onDragStart(): FairyGUI.EventListener;
            
            
            public get onDragMove(): FairyGUI.EventListener;
            
            
            public get onDragEnd(): FairyGUI.EventListener;
            
            
            public get onGearStop(): FairyGUI.EventListener;
            
            
            public get onFocusIn(): FairyGUI.EventListener;
            
            
            public get onFocusOut(): FairyGUI.EventListener;
            
            
            public get x(): number;
            public set x(value: number);
            
            public get y(): number;
            public set y(value: number);
            
            public get z(): number;
            public set z(value: number);
            
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            
            public get width(): number;
            public set width(value: number);
            
            public get height(): number;
            public set height(value: number);
            
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            
            public get actualWidth(): number;
            
            
            public get actualHeight(): number;
            
            
            public get xMin(): number;
            public set xMin(value: number);
            
            public get yMin(): number;
            public set yMin(value: number);
            
            public get scaleX(): number;
            public set scaleX(value: number);
            
            public get scaleY(): number;
            public set scaleY(value: number);
            
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            
            public get pivotX(): number;
            public set pivotX(value: number);
            
            public get pivotY(): number;
            public set pivotY(value: number);
            
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            
            public get pivotAsAnchor(): boolean;
            public set pivotAsAnchor(value: boolean);
            
            public get touchable(): boolean;
            public set touchable(value: boolean);
            
            public get grayed(): boolean;
            public set grayed(value: boolean);
            
            public get enabled(): boolean;
            public set enabled(value: boolean);
            
            public get rotation(): number;
            public set rotation(value: number);
            
            public get rotationX(): number;
            public set rotationX(value: number);
            
            public get rotationY(): number;
            public set rotationY(value: number);
            
            public get alpha(): number;
            public set alpha(value: number);
            
            public get visible(): boolean;
            public set visible(value: boolean);
            
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            
            public get focusable(): boolean;
            public set focusable(value: boolean);
            
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            
            public get focused(): boolean;
            
            
            public get tooltips(): string;
            public set tooltips(value: string);
            
            public get cursor(): string;
            public set cursor(value: string);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            public get gameObjectName(): string;
            public set gameObjectName(value: string);
            
            public get inContainer(): boolean;
            
            
            public get onStage(): boolean;
            
            
            public get resourceURL(): string;
            
            
            public get gearXY(): FairyGUI.GearXY;
            
            
            public get gearSize(): FairyGUI.GearSize;
            
            
            public get gearLook(): FairyGUI.GearLook;
            
            
            public get group(): FairyGUI.GGroup;
            public set group(value: FairyGUI.GGroup);
            
            public get root(): FairyGUI.GRoot;
            
            
            public get text(): string;
            public set text(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get draggable(): boolean;
            public set draggable(value: boolean);
            
            public get dragging(): boolean;
            
            
            public get isDisposed(): boolean;
            
            
            public get asImage(): FairyGUI.GImage;
            
            
            public get asCom(): FairyGUI.GComponent;
            
            
            public get asButton(): FairyGUI.GButton;
            
            
            public get asLabel(): FairyGUI.GLabel;
            
            
            public get asProgress(): FairyGUI.GProgressBar;
            
            
            public get asSlider(): FairyGUI.GSlider;
            
            
            public get asComboBox(): FairyGUI.GComboBox;
            
            
            public get asTextField(): FairyGUI.GTextField;
            
            
            public get asRichTextField(): FairyGUI.GRichTextField;
            
            
            public get asTextInput(): FairyGUI.GTextInput;
            
            
            public get asLoader(): FairyGUI.GLoader;
            
            
            public get asLoader3D(): FairyGUI.GLoader3D;
            
            
            public get asList(): FairyGUI.GList;
            
            
            public get asGraph(): FairyGUI.GGraph;
            
            
            public get asGroup(): FairyGUI.GGroup;
            
            
            public get asMovieClip(): FairyGUI.GMovieClip;
            
            
            public get asTree(): FairyGUI.GTree;
            
            
            public get treeNode(): FairyGUI.GTreeNode;
            
            
            
            public SetXY($xv: number, $yv: number):void;
            
            public SetXY($xv: number, $yv: number, $topLeftValue: boolean):void;
            
            public SetPosition($xv: number, $yv: number, $zv: number):void;
            
            public Center():void;
            
            public Center($restraint: boolean):void;
            
            public MakeFullScreen():void;
            
            public SetSize($wv: number, $hv: number):void;
            
            public SetSize($wv: number, $hv: number, $ignorePivot: boolean):void;
            
            public SetScale($wv: number, $hv: number):void;
            
            public SetPivot($xv: number, $yv: number):void;
            
            public SetPivot($xv: number, $yv: number, $asAnchor: boolean):void;
            
            public RequestFocus():void;
            
            public RequestFocus($byKey: boolean):void;
            
            public SetHome($obj: FairyGUI.GObject):void;
            
            public GetGear($index: number):FairyGUI.GearBase;
            
            public InvalidateBatchingState():void;
            
            public HandleControllerChanged($c: FairyGUI.Controller):void;
            
            public AddRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public AddRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean):void;
            
            public RemoveRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public RemoveFromParent():void;
            
            public StartDrag():void;
            
            public StartDrag($touchId: number):void;
            
            public StopDrag():void;
            
            public LocalToGlobal($pt: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public GlobalToLocal($pt: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public LocalToGlobal($rect: UnityEngine.Rect):UnityEngine.Rect;
            
            public GlobalToLocal($rect: UnityEngine.Rect):UnityEngine.Rect;
            
            public LocalToRoot($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot):UnityEngine.Vector2;
            
            public RootToLocal($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot):UnityEngine.Vector2;
            
            public WorldToLocal($pt: UnityEngine.Vector3):UnityEngine.Vector2;
            
            public WorldToLocal($pt: UnityEngine.Vector3, $camera: UnityEngine.Camera):UnityEngine.Vector2;
            
            public TransformPoint($pt: UnityEngine.Vector2, $targetSpace: FairyGUI.GObject):UnityEngine.Vector2;
            
            public TransformRect($rect: UnityEngine.Rect, $targetSpace: FairyGUI.GObject):UnityEngine.Rect;
            
            public Dispose():void;
            
            public ConstructFromResource():void;
            
            public Setup_BeforeAdd($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number):void;
            
            public Setup_AfterAdd($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number):void;
            
            public TweenMove($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenMoveX($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenMoveY($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenScale($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenScaleX($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenScaleY($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenResize($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenFade($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenRotate($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class EventListener extends System.Object{
            
            public get type(): string;
            
            
            public get isEmpty(): boolean;
            
            
            public get isDispatching(): boolean;
            
            
            
            public AddCapture($callback: FairyGUI.EventCallback1):void;
            
            public RemoveCapture($callback: FairyGUI.EventCallback1):void;
            
            public Add($callback: FairyGUI.EventCallback1):void;
            
            public Remove($callback: FairyGUI.EventCallback1):void;
            
            public Add($callback: FairyGUI.EventCallback0):void;
            
            public Remove($callback: FairyGUI.EventCallback0):void;
            
            public Set($callback: FairyGUI.EventCallback1):void;
            
            public Set($callback: FairyGUI.EventCallback0):void;
            
            public Clear():void;
            
            public Call():boolean;
            
            public Call($data: any):boolean;
            
            public BubbleCall($data: any):boolean;
            
            public BubbleCall():boolean;
            
            public BroadcastCall($data: any):boolean;
            
            public BroadcastCall():boolean;
            
            public constructor($owner: FairyGUI.EventDispatcher, $type: string);
            
            public constructor();
            
        }
        
        
        class Stage extends FairyGUI.Container implements FairyGUI.IEventDispatcher{
            
            public get soundVolume(): number;
            public set soundVolume(value: number);
            
            public static get inst(): FairyGUI.Stage;
            
            
            public static get touchScreen(): boolean;
            public static set touchScreen(value: boolean);
            
            public static get keyboardInput(): boolean;
            public static set keyboardInput(value: boolean);
            
            public static get isTouchOnUI(): boolean;
            
            
            public static get devicePixelRatio(): number;
            public static set devicePixelRatio(value: number);
            
            public get onStageResized(): FairyGUI.EventListener;
            
            
            public get touchTarget(): FairyGUI.DisplayObject;
            
            
            public get focus(): FairyGUI.DisplayObject;
            public set focus(value: FairyGUI.DisplayObject);
            
            public get touchPosition(): UnityEngine.Vector2;
            
            
            public get touchCount(): number;
            
            
            public get keyboard(): FairyGUI.IKeyboard;
            public set keyboard(value: FairyGUI.IKeyboard);
            
            public get activeCursor(): string;
            
            
            
            public add_beforeUpdate($value: System.Action):void;
            
            public remove_beforeUpdate($value: System.Action):void;
            
            public add_afterUpdate($value: System.Action):void;
            
            public remove_afterUpdate($value: System.Action):void;
            
            public static Instantiate():void;
            
            public SetFocus($newFocus: FairyGUI.DisplayObject, $byKey?: boolean):void;
            
            public DoKeyNavigate($backward: boolean):void;
            
            public GetTouchPosition($touchId: number):UnityEngine.Vector2;
            
            public GetTouchTarget($touchId: number):FairyGUI.DisplayObject;
            
            public GetAllTouch($result: System.Array$1<number>):System.Array$1<number>;
            
            public ResetInputState():void;
            
            public CancelClick($touchId: number):void;
            
            public EnableSound():void;
            
            public DisableSound():void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip):void;
            
            public OpenKeyboard($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean):void;
            
            public CloseKeyboard():void;
            
            public InputString($value: string):void;
            
            public SetCustomInput($screenPos: UnityEngine.Vector2, $buttonDown: boolean):void;
            
            public SetCustomInput($screenPos: UnityEngine.Vector2, $buttonDown: boolean, $buttonUp: boolean):void;
            
            public SetCustomInput($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean):void;
            
            public SetCustomInput($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean, $buttonUp: boolean):void;
            
            public ForceUpdate():void;
            
            public ApplyPanelOrder($target: FairyGUI.Container):void;
            
            public SortWorldSpacePanelsByZOrder($panelSortingOrder: number):void;
            
            public MonitorTexture($texture: FairyGUI.NTexture):void;
            
            public AddTouchMonitor($touchId: number, $target: FairyGUI.EventDispatcher):void;
            
            public RemoveTouchMonitor($target: FairyGUI.EventDispatcher):void;
            
            public IsTouchMonitoring($target: FairyGUI.EventDispatcher):boolean;
            
            public RegisterCursor($cursorName: string, $texture: UnityEngine.Texture2D, $hotspot: UnityEngine.Vector2):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class Margin extends System.ValueType{
            
            public left: number;
            public right: number;
            public top: number;
            public bottom: number;
            
        }
        
        
        interface IFilter{
            
            target: FairyGUI.DisplayObject;
            
            Update():void;
            
            Dispose():void;
            
        }
        
        
        class DisplayObjectInfo extends UnityEngine.MonoBehaviour{
            
            public displayObject: FairyGUI.DisplayObject;
            
            public constructor();
            
        }
        
        
        class GoWrapper extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher{
            
            public get wrapTarget(): UnityEngine.GameObject;
            public set wrapTarget(value: UnityEngine.GameObject);
            
            public get renderingOrder(): number;
            public set renderingOrder(value: number);
            
            
            public add_onUpdate($value: System.Action$1<FairyGUI.UpdateContext>):void;
            
            public remove_onUpdate($value: System.Action$1<FairyGUI.UpdateContext>):void;
            
            public SetWrapTarget($target: UnityEngine.GameObject, $cloneMaterial: boolean):void;
            
            public CacheRenderers():void;
            
            public constructor();
            
            public constructor($go: UnityEngine.GameObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class ColliderHitTest extends System.Object implements FairyGUI.IHitTest{
            
            public collider: UnityEngine.Collider;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
        }
        
        
        class HitTestContext extends System.Object{
            
            public static screenPoint: UnityEngine.Vector3;
            public static worldPoint: UnityEngine.Vector3;
            public static direction: UnityEngine.Vector3;
            public static forTouch: boolean;
            public static camera: UnityEngine.Camera;
            public static layerMask: number;
            public static maxDistance: number;
            public static cachedMainCamera: UnityEngine.Camera;
            
            public static GetRaycastHitFromCache($camera: UnityEngine.Camera, $hit: $Ref<UnityEngine.RaycastHit>):boolean;
            
            public static CacheRaycastHit($camera: UnityEngine.Camera, $hit: $Ref<UnityEngine.RaycastHit>):void;
            
            public static ClearRaycastHitCache():void;
            
            public constructor();
            
        }
        
        
        class MeshColliderHitTest extends FairyGUI.ColliderHitTest implements FairyGUI.IHitTest{
            
            public lastHit: UnityEngine.Vector2;
            
            public constructor($collider: UnityEngine.MeshCollider);
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class PixelHitTestData extends System.Object{
            
            public pixelWidth: number;
            public scale: number;
            public pixels: System.Array$1<number>;
            public pixelsLength: number;
            public pixelsOffset: number;
            
            public Load($ba: FairyGUI.Utils.ByteBuffer):void;
            
            public constructor();
            
        }
        
        
        class PixelHitTest extends System.Object implements FairyGUI.IHitTest{
            
            public offsetX: number;
            public offsetY: number;
            public sourceWidth: number;
            public sourceHeight: number;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor($data: FairyGUI.PixelHitTestData, $offsetX: number, $offsetY: number, $sourceWidth: number, $sourceHeight: number);
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor();
            
        }
        
        
        class RectHitTest extends System.Object implements FairyGUI.IHitTest{
            
            public rect: UnityEngine.Rect;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
        }
        
        
        class ShapeHitTest extends System.Object implements FairyGUI.IHitTest{
            
            public shape: FairyGUI.DisplayObject;
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor($obj: FairyGUI.DisplayObject);
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public constructor();
            
        }
        
        
        class Image extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory{
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get textureScale(): UnityEngine.Vector2;
            public set textureScale(value: UnityEngine.Vector2);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            
            public get fillAmount(): number;
            public set fillAmount(value: number);
            
            public get scale9Grid(): System.Nullable$1<UnityEngine.Rect>;
            public set scale9Grid(value: System.Nullable$1<UnityEngine.Rect>);
            
            public get scaleByTile(): boolean;
            public set scaleByTile(value: boolean);
            
            public get tileGridIndice(): number;
            public set tileGridIndice(value: number);
            
            
            public SetNativeSize():void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public SliceFill($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public constructor($texture: FairyGUI.NTexture);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class NTexture extends System.Object{
            
            public uvRect: UnityEngine.Rect;
            public rotated: boolean;
            public refCount: number;
            public lastActive: number;
            public destroyMethod: FairyGUI.DestroyMethod;
            public static get Empty(): FairyGUI.NTexture;
            
            
            public get width(): number;
            
            
            public get height(): number;
            
            
            public get offset(): UnityEngine.Vector2;
            public set offset(value: UnityEngine.Vector2);
            
            public get originalSize(): UnityEngine.Vector2;
            public set originalSize(value: UnityEngine.Vector2);
            
            public get root(): FairyGUI.NTexture;
            
            
            public get disposed(): boolean;
            
            
            public get nativeTexture(): UnityEngine.Texture;
            
            
            public get alphaTexture(): UnityEngine.Texture;
            
            
            
            public static add_CustomDestroyMethod($value: System.Action$1<UnityEngine.Texture>):void;
            
            public static remove_CustomDestroyMethod($value: System.Action$1<UnityEngine.Texture>):void;
            
            public add_onSizeChanged($value: System.Action$1<FairyGUI.NTexture>):void;
            
            public remove_onSizeChanged($value: System.Action$1<FairyGUI.NTexture>):void;
            
            public add_onRelease($value: System.Action$1<FairyGUI.NTexture>):void;
            
            public remove_onRelease($value: System.Action$1<FairyGUI.NTexture>):void;
            
            public static DisposeEmpty():void;
            
            public GetDrawRect($drawRect: UnityEngine.Rect):UnityEngine.Rect;
            
            public GetUV($uv: System.Array$1<UnityEngine.Vector2>):void;
            
            public GetMaterialManager($shaderName: string):FairyGUI.MaterialManager;
            
            public Unload():void;
            
            public Unload($destroyMaterials: boolean):void;
            
            public Reload($nativeTexture: UnityEngine.Texture, $alphaTexture: UnityEngine.Texture):void;
            
            public AddRef():void;
            
            public ReleaseRef():void;
            
            public Dispose():void;
            
            public constructor($texture: UnityEngine.Texture);
            
            public constructor($texture: UnityEngine.Texture, $alphaTexture: UnityEngine.Texture, $xScale: number, $yScale: number);
            
            public constructor($texture: UnityEngine.Texture, $region: UnityEngine.Rect);
            
            public constructor($root: FairyGUI.NTexture, $region: UnityEngine.Rect, $rotated: boolean);
            
            public constructor($root: FairyGUI.NTexture, $region: UnityEngine.Rect, $rotated: boolean, $originalSize: UnityEngine.Vector2, $offset: UnityEngine.Vector2);
            
            public constructor($sprite: UnityEngine.Sprite);
            
            public constructor();
            
        }
        
        
        enum FillMethod{ None = 0, Horizontal = 1, Vertical = 2, Radial90 = 3, Radial180 = 4, Radial360 = 5 }
        
        
        class VertexBuffer extends System.Object{
            
            public contentRect: UnityEngine.Rect;
            public uvRect: UnityEngine.Rect;
            public vertexColor: UnityEngine.Color32;
            public textureSize: UnityEngine.Vector2;
            public vertices: System.Collections.Generic.List$1<UnityEngine.Vector3>;
            public colors: System.Collections.Generic.List$1<UnityEngine.Color32>;
            public uvs: System.Collections.Generic.List$1<UnityEngine.Vector2>;
            public uvs2: System.Collections.Generic.List$1<UnityEngine.Vector2>;
            public triangles: System.Collections.Generic.List$1<number>;
            public static NormalizedUV: System.Array$1<UnityEngine.Vector2>;
            public static NormalizedPosition: System.Array$1<UnityEngine.Vector2>;
            public get currentVertCount(): number;
            
            
            
            public static Begin():FairyGUI.VertexBuffer;
            
            public static Begin($source: FairyGUI.VertexBuffer):FairyGUI.VertexBuffer;
            
            public End():void;
            
            public Clear():void;
            
            public AddVert($position: UnityEngine.Vector3):void;
            
            public AddVert($position: UnityEngine.Vector3, $color: UnityEngine.Color32):void;
            
            public AddVert($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv: UnityEngine.Vector2):void;
            
            public AddQuad($vertRect: UnityEngine.Rect):void;
            
            public AddQuad($vertRect: UnityEngine.Rect, $color: UnityEngine.Color32):void;
            
            public AddQuad($vertRect: UnityEngine.Rect, $color: UnityEngine.Color32, $uvRect: UnityEngine.Rect):void;
            
            public RepeatColors($value: System.Array$1<UnityEngine.Color32>, $startIndex: number, $count: number):void;
            
            public AddTriangle($idx0: number, $idx1: number, $idx2: number):void;
            
            public AddTriangles($idxList: System.Array$1<number>, $startVertexIndex?: number):void;
            
            public AddTriangles($startVertexIndex?: number):void;
            
            public GetPosition($index: number):UnityEngine.Vector3;
            
            public GetUVAtPosition($position: UnityEngine.Vector2, $usePercent: boolean):UnityEngine.Vector2;
            
            public Append($vb: FairyGUI.VertexBuffer):void;
            
            public Insert($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class MaterialManager extends System.Object{
            
            public firstMaterialInFrame: boolean;
            
            public add_onCreateNewMaterial($value: System.Action$1<UnityEngine.Material>):void;
            
            public remove_onCreateNewMaterial($value: System.Action$1<UnityEngine.Material>):void;
            
            public GetFlagsByKeywords($keywords: System.Collections.Generic.IList$1<string>):number;
            
            public GetMaterial($flags: number, $blendMode: FairyGUI.BlendMode, $group: number):UnityEngine.Material;
            
            public DestroyMaterials():void;
            
            public RefreshMaterials():void;
            
        }
        
        
        class CompositeMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public elements: System.Collections.Generic.List$1<FairyGUI.IMeshFactory>;
            public activeIndex: number;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class EllipseMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public drawRect: System.Nullable$1<UnityEngine.Rect>;
            public lineWidth: number;
            public lineColor: UnityEngine.Color32;
            public centerColor: System.Nullable$1<UnityEngine.Color32>;
            public fillColor: System.Nullable$1<UnityEngine.Color32>;
            public startDegree: number;
            public endDegreee: number;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class FillMesh extends System.Object implements FairyGUI.IMeshFactory{
            
            public method: FairyGUI.FillMethod;
            public origin: number;
            public amount: number;
            public clockwise: boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class LineMesh extends System.Object implements FairyGUI.IMeshFactory{
            
            public path: FairyGUI.GPath;
            public lineWidth: number;
            public lineWidthCurve: UnityEngine.AnimationCurve;
            public gradient: UnityEngine.Gradient;
            public roundEdge: boolean;
            public fillStart: number;
            public fillEnd: number;
            public pointDensity: number;
            public repeatFill: boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class GPath extends System.Object{
            
            public get length(): number;
            
            
            public get segmentCount(): number;
            
            
            
            public Create($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint):void;
            
            public Create($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint, $pt3: FairyGUI.GPathPoint):void;
            
            public Create($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint, $pt3: FairyGUI.GPathPoint, $pt4: FairyGUI.GPathPoint):void;
            
            public Create($points: System.Collections.Generic.IEnumerable$1<FairyGUI.GPathPoint>):void;
            
            public Clear():void;
            
            public GetPointAt($t: number):UnityEngine.Vector3;
            
            public GetSegmentLength($segmentIndex: number):number;
            
            public GetPointsInSegment($segmentIndex: number, $t0: number, $t1: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector3>, $ts?: System.Collections.Generic.List$1<number>, $pointDensity?: number):void;
            
            public GetAllPoints($points: System.Collections.Generic.List$1<UnityEngine.Vector3>, $pointDensity?: number):void;
            
            public constructor();
            
        }
        
        
        class PlaneMesh extends System.Object implements FairyGUI.IMeshFactory{
            
            public gridSize: number;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class PolygonMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public points: System.Collections.Generic.List$1<UnityEngine.Vector2>;
            public texcoords: System.Collections.Generic.List$1<UnityEngine.Vector2>;
            public lineWidth: number;
            public lineColor: UnityEngine.Color32;
            public fillColor: System.Nullable$1<UnityEngine.Color32>;
            public colors: System.Array$1<UnityEngine.Color32>;
            public usePercentPositions: boolean;
            
            public Add($point: UnityEngine.Vector2):void;
            
            public Add($point: UnityEngine.Vector2, $texcoord: UnityEngine.Vector2):void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class RectMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public drawRect: System.Nullable$1<UnityEngine.Rect>;
            public lineWidth: number;
            public lineColor: UnityEngine.Color32;
            public fillColor: System.Nullable$1<UnityEngine.Color32>;
            public colors: System.Array$1<UnityEngine.Color32>;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class RegularPolygonMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public drawRect: System.Nullable$1<UnityEngine.Rect>;
            public sides: number;
            public lineWidth: number;
            public lineColor: UnityEngine.Color32;
            public centerColor: System.Nullable$1<UnityEngine.Color32>;
            public fillColor: System.Nullable$1<UnityEngine.Color32>;
            public distances: System.Array$1<number>;
            public rotation: number;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class RoundedRectMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory{
            
            public drawRect: System.Nullable$1<UnityEngine.Rect>;
            public lineWidth: number;
            public lineColor: UnityEngine.Color32;
            public fillColor: System.Nullable$1<UnityEngine.Color32>;
            public topLeftRadius: number;
            public topRightRadius: number;
            public bottomLeftRadius: number;
            public bottomRightRadius: number;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public HitTest($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2):boolean;
            
            public constructor();
            
            public HitTest($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class StraightLineMesh extends System.Object implements FairyGUI.IMeshFactory{
            
            public color: UnityEngine.Color;
            public origin: UnityEngine.Vector3;
            public end: UnityEngine.Vector3;
            public lineWidth: number;
            public repeatFill: boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public constructor($lineWidth: number, $color: UnityEngine.Color, $repeatFill: boolean);
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
        }
        
        
        class MovieClip extends FairyGUI.Image implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory{
            
            public interval: number;
            public swing: boolean;
            public repeatDelay: number;
            public timeScale: number;
            public ignoreEngineTimeScale: boolean;
            public get onPlayEnd(): FairyGUI.EventListener;
            
            
            public get frames(): System.Array$1<FairyGUI.MovieClip.Frame>;
            public set frames(value: System.Array$1<FairyGUI.MovieClip.Frame>);
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            
            public Rewind():void;
            
            public SyncStatus($anotherMc: FairyGUI.MovieClip):void;
            
            public Advance($time: number):void;
            
            public SetPlaySettings():void;
            
            public SetPlaySettings($start: number, $end: number, $times: number, $endAt: number):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor($texture: FairyGUI.NTexture);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class NAudioClip extends System.Object{
            
            public static CustomDestroyMethod: System.Action$1<UnityEngine.AudioClip>;
            public destroyMethod: FairyGUI.DestroyMethod;
            public nativeClip: UnityEngine.AudioClip;
            
            public Unload():void;
            
            public Reload($audioClip: UnityEngine.AudioClip):void;
            
            public constructor($audioClip: UnityEngine.AudioClip);
            
            public constructor();
            
        }
        
        
        enum DestroyMethod{ Destroy = 0, Unload = 1, None = 2, ReleaseTemp = 3, Custom = 4 }
        
        
        enum FlipType{ None = 0, Horizontal = 1, Vertical = 2, Both = 3 }
        
        
        class ShaderConfig extends System.Object{
            
            public static Get: FairyGUI.ShaderConfig.GetFunction;
            public static imageShader: string;
            public static textShader: string;
            public static bmFontShader: string;
            public static TMPFontShader: string;
            public static ID_ClipBox: number;
            public static ID_ClipSoftness: number;
            public static ID_AlphaTex: number;
            public static ID_StencilComp: number;
            public static ID_Stencil: number;
            public static ID_StencilOp: number;
            public static ID_StencilReadMask: number;
            public static ID_ColorMask: number;
            public static ID_ColorMatrix: number;
            public static ID_ColorOffset: number;
            public static ID_BlendSrcFactor: number;
            public static ID_BlendDstFactor: number;
            public static ID_ColorOption: number;
            public static ID_Stencil2: number;
            
            public static GetShader($name: string):UnityEngine.Shader;
            
        }
        
        
        class Shape extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher{
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get isEmpty(): boolean;
            
            
            
            public DrawRect($lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color):void;
            
            public DrawRect($lineSize: number, $colors: System.Array$1<UnityEngine.Color32>):void;
            
            public DrawRoundRect($lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $topLeftRadius: number, $topRightRadius: number, $bottomLeftRadius: number, $bottomRightRadius: number):void;
            
            public DrawEllipse($fillColor: UnityEngine.Color):void;
            
            public DrawEllipse($lineSize: number, $centerColor: UnityEngine.Color, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $startDegree: number, $endDegree: number):void;
            
            public DrawPolygon($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color):void;
            
            public DrawPolygon($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $colors: System.Array$1<UnityEngine.Color32>):void;
            
            public DrawPolygon($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color, $lineSize: number, $lineColor: UnityEngine.Color):void;
            
            public DrawRegularPolygon($sides: number, $lineSize: number, $centerColor: UnityEngine.Color, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $rotation: number, $distances: System.Array$1<number>):void;
            
            public Clear():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        interface IKeyboard{
            
            done: boolean;
            supportsCaret: boolean;
            
            GetInput():string;
            
            Open($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean):void;
            
            Close():void;
            
        }
        
        
        class StageCamera extends UnityEngine.MonoBehaviour{
            
            public constantSize: boolean;
            public unitsPerPixel: number;
            public cachedTransform: UnityEngine.Transform;
            public cachedCamera: UnityEngine.Camera;
            public static main: UnityEngine.Camera;
            public static screenSizeVer: number;
            public static Name: string;
            public static LayerName: string;
            public static DefaultCameraSize: number;
            public static DefaultUnitsPerPixel: number;
            
            public ApplyModifiedProperties():void;
            
            public static CheckMainCamera():void;
            
            public static CheckCaptureCamera():void;
            
            public static CreateCamera($name: string, $cullingMask: number):UnityEngine.Camera;
            
            public constructor();
            
        }
        
        
        class StageEngine extends UnityEngine.MonoBehaviour{
            
            public ObjectsOnStage: number;
            public GraphicsOnStage: number;
            public static beingQuit: boolean;
            
            public constructor();
            
        }
        
        
        class Stats extends System.Object{
            
            public static ObjectCount: number;
            public static GraphicsCount: number;
            public static LatestObjectCreation: number;
            public static LatestGraphicsCreation: number;
            
            public constructor();
            
        }
        
        
        class BitmapFont extends FairyGUI.BaseFont{
            
            public size: number;
            public resizable: boolean;
            public hasChannel: boolean;
            
            public AddChar($ch: number, $glyph: FairyGUI.BitmapFont.BMGlyph):void;
            
            public constructor();
            
        }
        
        
        class DynamicFont extends FairyGUI.BaseFont{
            
            public get nativeFont(): UnityEngine.Font;
            public set nativeFont(value: UnityEngine.Font);
            
            
            public constructor();
            
            public constructor($name: string, $font: UnityEngine.Font);
            
        }
        
        
        class Emoji extends System.Object{
            
            public url: string;
            public width: number;
            public height: number;
            
            public constructor($url: string, $width: number, $height: number);
            
            public constructor($url: string);
            
            public constructor();
            
        }
        
        
        class FontManager extends System.Object{
            
            public static sFontFactory: System.Collections.Generic.Dictionary$2<string, FairyGUI.BaseFont>;
            
            public static RegisterFont($font: FairyGUI.BaseFont, $alias?: string):void;
            
            public static UnregisterFont($font: FairyGUI.BaseFont):void;
            
            public static GetFont($name: string):FairyGUI.BaseFont;
            
            public static Clear():void;
            
            public constructor();
            
        }
        
        
        class InputTextField extends FairyGUI.RichTextField implements FairyGUI.IEventDispatcher{
            
            public static onCopy: System.Action$2<FairyGUI.InputTextField, string>;
            public static onPaste: System.Action$1<FairyGUI.InputTextField>;
            public static contextMenu: FairyGUI.PopupMenu;
            public get maxLength(): number;
            public set maxLength(value: number);
            
            public get keyboardInput(): boolean;
            public set keyboardInput(value: boolean);
            
            public get keyboardType(): number;
            public set keyboardType(value: number);
            
            public get hideInput(): boolean;
            public set hideInput(value: boolean);
            
            public get disableIME(): boolean;
            public set disableIME(value: boolean);
            
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get onSubmit(): FairyGUI.EventListener;
            
            
            public get text(): string;
            public set text(value: string);
            
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            
            public get restrict(): string;
            public set restrict(value: string);
            
            public get caretPosition(): number;
            public set caretPosition(value: number);
            
            public get selectionBeginIndex(): number;
            
            
            public get selectionEndIndex(): number;
            
            
            public get promptText(): string;
            public set promptText(value: string);
            
            public get displayAsPassword(): boolean;
            public set displayAsPassword(value: boolean);
            
            public get editable(): boolean;
            public set editable(value: boolean);
            
            public get border(): number;
            public set border(value: number);
            
            public get corner(): number;
            public set corner(value: number);
            
            public get borderColor(): UnityEngine.Color;
            public set borderColor(value: UnityEngine.Color);
            
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            
            
            public SetSelection($start: number, $length: number):void;
            
            public ReplaceSelection($value: string):void;
            
            public ReplaceText($value: string):void;
            
            public GetSelection():string;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class RichTextField extends FairyGUI.Container implements FairyGUI.IEventDispatcher{
            
            public get htmlPageContext(): FairyGUI.Utils.IHtmlPageContext;
            public set htmlPageContext(value: FairyGUI.Utils.IHtmlPageContext);
            
            public get htmlParseOptions(): FairyGUI.Utils.HtmlParseOptions;
            
            
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            
            public get textField(): FairyGUI.TextField;
            
            
            public get text(): string;
            public set text(value: string);
            
            public get htmlText(): string;
            public set htmlText(value: string);
            
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            
            public get htmlElementCount(): number;
            
            
            
            public GetHtmlElement($name: string):FairyGUI.Utils.HtmlElement;
            
            public GetHtmlElementAt($index: number):FairyGUI.Utils.HtmlElement;
            
            public ShowHtmlObject($index: number, $show: boolean):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class PopupMenu extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public visibleItemCount: number;
            public hideOnClickItem: boolean;
            public autoSize: boolean;
            public get onPopup(): FairyGUI.EventListener;
            
            
            public get onClose(): FairyGUI.EventListener;
            
            
            public get itemCount(): number;
            
            
            public get contentPane(): FairyGUI.GComponent;
            
            
            public get list(): FairyGUI.GList;
            
            
            
            public AddItem($caption: string, $callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            
            public AddItem($caption: string, $callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            
            public AddItemAt($caption: string, $index: number, $callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            
            public AddItemAt($caption: string, $index: number, $callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            
            public AddSeperator():void;
            
            public AddSeperator($index: number):void;
            
            public GetItemName($index: number):string;
            
            public SetItemText($name: string, $caption: string):void;
            
            public SetItemVisible($name: string, $visible: boolean):void;
            
            public SetItemGrayed($name: string, $grayed: boolean):void;
            
            public SetItemCheckable($name: string, $checkable: boolean):void;
            
            public SetItemChecked($name: string, $check: boolean):void;
            
            public IsItemChecked($name: string):boolean;
            
            public RemoveItem($name: string):void;
            
            public ClearItems():void;
            
            public Dispose():void;
            
            public Show():void;
            
            public Show($target: FairyGUI.GObject):void;
            
            public Show($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public Show($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $parentMenu: FairyGUI.PopupMenu):void;
            
            public Hide():void;
            
            public constructor();
            
            public constructor($resourceURL: string);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class RTLSupport extends System.Object{
            
            public static BaseDirection: FairyGUI.RTLSupport.DirectionType;
            
            public static IsArabicLetter($ch: number):boolean;
            
            public static ConvertNumber($strNumber: string):string;
            
            public static ContainsArabicLetters($text: string):boolean;
            
            public static DetectTextDirection($text: string):FairyGUI.RTLSupport.DirectionType;
            
            public static DoMapping($input: string):string;
            
            public static ConvertLineL($source: string):string;
            
            public static ConvertLineR($source: string):string;
            
            public constructor();
            
        }
        
        
        class TextField extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory{
            
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get text(): string;
            public set text(value: string);
            
            public get htmlText(): string;
            public set htmlText(value: string);
            
            public get parsedText(): string;
            
            
            public get autoSize(): FairyGUI.AutoSizeType;
            public set autoSize(value: FairyGUI.AutoSizeType);
            
            public get wordWrap(): boolean;
            public set wordWrap(value: boolean);
            
            public get singleLine(): boolean;
            public set singleLine(value: boolean);
            
            public get stroke(): number;
            public set stroke(value: number);
            
            public get strokeColor(): UnityEngine.Color;
            public set strokeColor(value: UnityEngine.Color);
            
            public get shadowOffset(): UnityEngine.Vector2;
            public set shadowOffset(value: UnityEngine.Vector2);
            
            public get textWidth(): number;
            
            
            public get textHeight(): number;
            
            
            public get maxWidth(): number;
            public set maxWidth(value: number);
            
            public get htmlElements(): System.Collections.Generic.List$1<FairyGUI.Utils.HtmlElement>;
            
            
            public get lines(): System.Collections.Generic.List$1<FairyGUI.TextField.LineInfo>;
            
            
            public get charPositions(): System.Collections.Generic.List$1<FairyGUI.TextField.CharPosition>;
            
            
            public get richTextField(): FairyGUI.RichTextField;
            
            
            
            public EnableCharPositionSupport():void;
            
            public ApplyFormat():void;
            
            public Redraw():boolean;
            
            public HasCharacter($ch: number):boolean;
            
            public GetLinesShape($startLine: number, $startCharX: number, $endLine: number, $endCharX: number, $clipped: boolean, $resultRects: System.Collections.Generic.List$1<UnityEngine.Rect>):void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class SelectionShape extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory{
            
            public rects: System.Collections.Generic.List$1<UnityEngine.Rect>;
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            
            public Refresh():void;
            
            public Clear():void;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public OnPopulateMesh($vb: FairyGUI.VertexBuffer):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        enum VertAlignType{ Top = 0, Middle = 1, Bottom = 2 }
        
        
        enum AutoSizeType{ None = 0, Both = 1, Height = 2, Shrink = 3 }
        
        
        class TouchScreenKeyboard extends System.Object implements FairyGUI.IKeyboard{
            
            public get done(): boolean;
            
            
            public get supportsCaret(): boolean;
            
            
            
            public GetInput():string;
            
            public Open($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean):void;
            
            public Close():void;
            
            public constructor();
            
            public Open($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean):void;
            
        }
        
        
        class TypingEffect extends System.Object{
            
            
            public Start():void;
            
            public Print():boolean;
            
            public Print($interval: number):System.Collections.IEnumerator;
            
            public PrintAll($interval: number):void;
            
            public Cancel():void;
            
            public constructor($textField: FairyGUI.TextField);
            
            public constructor($textField: FairyGUI.GTextField);
            
            public constructor();
            
        }
        
        
        class GTextField extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear{
            
            public get text(): string;
            public set text(value: string);
            
            public get templateVars(): System.Collections.Generic.Dictionary$2<string, string>;
            public set templateVars(value: System.Collections.Generic.Dictionary$2<string, string>);
            
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get singleLine(): boolean;
            public set singleLine(value: boolean);
            
            public get stroke(): number;
            public set stroke(value: number);
            
            public get strokeColor(): UnityEngine.Color;
            public set strokeColor(value: UnityEngine.Color);
            
            public get shadowOffset(): UnityEngine.Vector2;
            public set shadowOffset(value: UnityEngine.Vector2);
            
            public get UBBEnabled(): boolean;
            public set UBBEnabled(value: boolean);
            
            public get autoSize(): FairyGUI.AutoSizeType;
            public set autoSize(value: FairyGUI.AutoSizeType);
            
            public get textWidth(): number;
            
            
            public get textHeight(): number;
            
            
            
            public SetVar($name: string, $value: string):FairyGUI.GTextField;
            
            public FlushVars():void;
            
            public HasCharacter($ch: number):boolean;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        interface IColorGear{
            
            color: UnityEngine.Color;
            
        }
        
        
        interface ITextColorGear extends FairyGUI.IColorGear{
            
            strokeColor: UnityEngine.Color;
            color: UnityEngine.Color;
            
        }
        
        
        class EventContext extends System.Object{
            
            public type: string;
            public data: any;
            public get sender(): FairyGUI.EventDispatcher;
            
            
            public get initiator(): any;
            
            
            public get inputEvent(): FairyGUI.InputEvent;
            
            
            public get isDefaultPrevented(): boolean;
            
            
            
            public StopPropagation():void;
            
            public PreventDefault():void;
            
            public CaptureTouch():void;
            
            public constructor();
            
        }
        
        
        class InputEvent extends System.Object{
            
            public get x(): number;
            
            
            public get y(): number;
            
            
            public get keyCode(): UnityEngine.KeyCode;
            
            
            public get character(): number;
            
            
            public get modifiers(): UnityEngine.EventModifiers;
            
            
            public get mouseWheelDelta(): number;
            
            
            public get touchId(): number;
            
            
            public get button(): number;
            
            
            public get clickCount(): number;
            
            
            public get holdTime(): number;
            
            
            public get position(): UnityEngine.Vector2;
            
            
            public get isDoubleClick(): boolean;
            
            
            public get ctrlOrCmd(): boolean;
            
            
            public get ctrl(): boolean;
            
            
            public get shift(): boolean;
            
            
            public get alt(): boolean;
            
            
            public get command(): boolean;
            
            
            
            public constructor();
            
        }
        
        
        type EventCallback1 = (context: FairyGUI.EventContext) => void;
        var EventCallback1: {new (func: (context: FairyGUI.EventContext) => void): EventCallback1;}
        
        
        type EventCallback0 = () => void;
        var EventCallback0: {new (func: () => void): EventCallback0;}
        
        
        class BlurFilter extends System.Object implements FairyGUI.IFilter{
            
            public blurSize: number;
            public get target(): FairyGUI.DisplayObject;
            public set target(value: FairyGUI.DisplayObject);
            
            
            public Dispose():void;
            
            public Update():void;
            
            public constructor();
            
        }
        
        
        class ColorFilter extends System.Object implements FairyGUI.IFilter{
            
            public get target(): FairyGUI.DisplayObject;
            public set target(value: FairyGUI.DisplayObject);
            
            
            public Dispose():void;
            
            public Update():void;
            
            public Invert():void;
            
            public AdjustSaturation($sat: number):void;
            
            public AdjustContrast($value: number):void;
            
            public AdjustBrightness($value: number):void;
            
            public AdjustHue($value: number):void;
            
            public Tint($color: UnityEngine.Color, $amount?: number):void;
            
            public Reset():void;
            
            public ConcatValues(...values: number[]):void;
            
            public constructor();
            
        }
        
        
        class LongPressGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public trigger: number;
            public interval: number;
            public once: boolean;
            public holdRangeRadius: number;
            public static TRIGGER: number;
            public static INTERVAL: number;
            public get host(): FairyGUI.GObject;
            
            
            public get onBegin(): FairyGUI.EventListener;
            
            
            public get onEnd(): FairyGUI.EventListener;
            
            
            public get onAction(): FairyGUI.EventListener;
            
            
            
            public Dispose():void;
            
            public Enable($value: boolean):void;
            
            public Cancel():void;
            
            public constructor($host: FairyGUI.GObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class PinchGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public scale: number;
            public delta: number;
            public get host(): FairyGUI.GObject;
            
            
            public get onBegin(): FairyGUI.EventListener;
            
            
            public get onEnd(): FairyGUI.EventListener;
            
            
            public get onAction(): FairyGUI.EventListener;
            
            
            
            public Dispose():void;
            
            public Enable($value: boolean):void;
            
            public constructor($host: FairyGUI.GObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class RotationGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public rotation: number;
            public delta: number;
            public snapping: boolean;
            public get host(): FairyGUI.GObject;
            
            
            public get onBegin(): FairyGUI.EventListener;
            
            
            public get onEnd(): FairyGUI.EventListener;
            
            
            public get onAction(): FairyGUI.EventListener;
            
            
            
            public Dispose():void;
            
            public Enable($value: boolean):void;
            
            public constructor($host: FairyGUI.GObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class SwipeGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public velocity: UnityEngine.Vector2;
            public position: UnityEngine.Vector2;
            public delta: UnityEngine.Vector2;
            public actionDistance: number;
            public snapping: boolean;
            public static ACTION_DISTANCE: number;
            public get host(): FairyGUI.GObject;
            
            
            public get onBegin(): FairyGUI.EventListener;
            
            
            public get onEnd(): FairyGUI.EventListener;
            
            
            public get onMove(): FairyGUI.EventListener;
            
            
            public get onAction(): FairyGUI.EventListener;
            
            
            
            public Dispose():void;
            
            public Enable($value: boolean):void;
            
            public constructor($host: FairyGUI.GObject);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class EaseManager extends System.Object{
            
            
            public static Evaluate($easeType: FairyGUI.EaseType, $time: number, $duration: number, $overshootOrAmplitude?: number, $period?: number, $customEase?: FairyGUI.CustomEase):number;
            
        }
        
        
        enum EaseType{ Linear = 0, SineIn = 1, SineOut = 2, SineInOut = 3, QuadIn = 4, QuadOut = 5, QuadInOut = 6, CubicIn = 7, CubicOut = 8, CubicInOut = 9, QuartIn = 10, QuartOut = 11, QuartInOut = 12, QuintIn = 13, QuintOut = 14, QuintInOut = 15, ExpoIn = 16, ExpoOut = 17, ExpoInOut = 18, CircIn = 19, CircOut = 20, CircInOut = 21, ElasticIn = 22, ElasticOut = 23, ElasticInOut = 24, BackIn = 25, BackOut = 26, BackInOut = 27, BounceIn = 28, BounceOut = 29, BounceInOut = 30, Custom = 31 }
        
        
        class CustomEase extends System.Object{
            
            
            public Create($pathPoints: System.Collections.Generic.IEnumerable$1<FairyGUI.GPathPoint>):void;
            
            public Evaluate($time: number):number;
            
            public constructor($pointDensity?: number);
            
            public constructor();
            
        }
        
        
        class GPathPoint extends System.ValueType{
            
            public pos: UnityEngine.Vector3;
            public control1: UnityEngine.Vector3;
            public control2: UnityEngine.Vector3;
            public curveType: FairyGUI.GPathPoint.CurveType;
            public smooth: boolean;
            
            public constructor($pos: UnityEngine.Vector3);
            
            public constructor($pos: UnityEngine.Vector3, $control: UnityEngine.Vector3);
            
            public constructor($pos: UnityEngine.Vector3, $control1: UnityEngine.Vector3, $control2: UnityEngine.Vector3);
            
            public constructor($pos: UnityEngine.Vector3, $curveType: FairyGUI.GPathPoint.CurveType);
            
            public constructor();
            
        }
        
        
        class GTween extends System.Object{
            
            public static catchCallbackExceptions: boolean;
            
            public static To($startValue: number, $endValue: number, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector2, $endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector3, $endValue: UnityEngine.Vector3, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector4, $endValue: UnityEngine.Vector4, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Color, $endValue: UnityEngine.Color, $duration: number):FairyGUI.GTweener;
            
            public static ToDouble($startValue: number, $endValue: number, $duration: number):FairyGUI.GTweener;
            
            public static DelayedCall($delay: number):FairyGUI.GTweener;
            
            public static Shake($startValue: UnityEngine.Vector3, $amplitude: number, $duration: number):FairyGUI.GTweener;
            
            public static IsTweening($target: any):boolean;
            
            public static IsTweening($target: any, $propType: FairyGUI.TweenPropType):boolean;
            
            public static Kill($target: any):void;
            
            public static Kill($target: any, $complete: boolean):void;
            
            public static Kill($target: any, $propType: FairyGUI.TweenPropType, $complete: boolean):void;
            
            public static GetTween($target: any):FairyGUI.GTweener;
            
            public static GetTween($target: any, $propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            
            public static Clean():void;
            
            public constructor();
            
        }
        
        
        class GTweener extends System.Object{
            
            public get delay(): number;
            
            
            public get duration(): number;
            
            
            public get repeat(): number;
            
            
            public get target(): any;
            
            
            public get userData(): any;
            
            
            public get startValue(): FairyGUI.TweenValue;
            
            
            public get endValue(): FairyGUI.TweenValue;
            
            
            public get value(): FairyGUI.TweenValue;
            
            
            public get deltaValue(): FairyGUI.TweenValue;
            
            
            public get normalizedTime(): number;
            
            
            public get completed(): boolean;
            
            
            public get allCompleted(): boolean;
            
            
            
            public SetDelay($value: number):FairyGUI.GTweener;
            
            public SetDuration($value: number):FairyGUI.GTweener;
            
            public SetBreakpoint($value: number):FairyGUI.GTweener;
            
            public SetEase($value: FairyGUI.EaseType):FairyGUI.GTweener;
            
            public SetEase($value: FairyGUI.EaseType, $customEase: FairyGUI.CustomEase):FairyGUI.GTweener;
            
            public SetEasePeriod($value: number):FairyGUI.GTweener;
            
            public SetEaseOvershootOrAmplitude($value: number):FairyGUI.GTweener;
            
            public SetRepeat($times: number, $yoyo?: boolean):FairyGUI.GTweener;
            
            public SetTimeScale($value: number):FairyGUI.GTweener;
            
            public SetIgnoreEngineTimeScale($value: boolean):FairyGUI.GTweener;
            
            public SetSnapping($value: boolean):FairyGUI.GTweener;
            
            public SetPath($value: FairyGUI.GPath):FairyGUI.GTweener;
            
            public SetTarget($value: any):FairyGUI.GTweener;
            
            public SetTarget($value: any, $propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            
            public SetUserData($value: any):FairyGUI.GTweener;
            
            public OnUpdate($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnStart($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnComplete($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnUpdate($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public OnStart($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public OnComplete($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public SetListener($value: FairyGUI.ITweenListener):FairyGUI.GTweener;
            
            public SetPaused($paused: boolean):FairyGUI.GTweener;
            
            public Seek($time: number):void;
            
            public Kill($complete?: boolean):void;
            
            public constructor();
            
        }
        
        
        enum TweenPropType{ None = 0, X = 1, Y = 2, Z = 3, XY = 4, Position = 5, Width = 6, Height = 7, Size = 8, ScaleX = 9, ScaleY = 10, Scale = 11, Rotation = 12, RotationX = 13, RotationY = 14, Alpha = 15, Progress = 16 }
        
        
        interface ITweenListener{
            
            
            OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
        }
        
        
        type GTweenCallback = () => void;
        var GTweenCallback: {new (func: () => void): GTweenCallback;}
        
        
        type GTweenCallback1 = (tweener: FairyGUI.GTweener) => void;
        var GTweenCallback1: {new (func: (tweener: FairyGUI.GTweener) => void): GTweenCallback1;}
        
        
        class TweenValue extends System.Object{
            
            public x: number;
            public y: number;
            public z: number;
            public w: number;
            public d: number;
            public get vec2(): UnityEngine.Vector2;
            public set vec2(value: UnityEngine.Vector2);
            
            public get vec3(): UnityEngine.Vector3;
            public set vec3(value: UnityEngine.Vector3);
            
            public get vec4(): UnityEngine.Vector4;
            public set vec4(value: UnityEngine.Vector4);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            
            public SetZero():void;
            
            public constructor();
            
        }
        
        
        class ChangePageAction extends FairyGUI.ControllerAction{
            
            public objectId: string;
            public controllerName: string;
            public targetPage: string;
            
            public constructor();
            
        }
        
        
        class ControllerAction extends System.Object{
            
            public fromPage: System.Array$1<string>;
            public toPage: System.Array$1<string>;
            
            public static CreateAction($type: FairyGUI.ControllerAction.ActionType):FairyGUI.ControllerAction;
            
            public Run($controller: FairyGUI.Controller, $prevPage: string, $curPage: string):void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public constructor();
            
        }
        
        
        class Controller extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public name: string;
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectedPage(): string;
            public set selectedPage(value: string);
            
            public get previsousIndex(): number;
            
            
            public get previousPage(): string;
            
            
            public get pageCount(): number;
            
            
            
            public Dispose():void;
            
            public SetSelectedIndex($value: number):void;
            
            public SetSelectedPage($value: string):void;
            
            public GetPageName($index: number):string;
            
            public GetPageId($index: number):string;
            
            public GetPageIdByName($aName: string):string;
            
            public AddPage($name: string):void;
            
            public AddPageAt($name: string, $index: number):void;
            
            public RemovePage($name: string):void;
            
            public RemovePageAt($index: number):void;
            
            public ClearPages():void;
            
            public HasPage($aName: string):boolean;
            
            public RunActions():void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class PlayTransitionAction extends FairyGUI.ControllerAction{
            
            public transitionName: string;
            public playTimes: number;
            public delay: number;
            public stopOnExit: boolean;
            
            public constructor();
            
        }
        
        
        class AsyncCreationHelper extends System.Object{
            
            
            public static CreateObject($item: FairyGUI.PackageItem, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public constructor();
            
        }
        
        
        class PackageItem extends System.Object{
            
            public owner: FairyGUI.UIPackage;
            public type: FairyGUI.PackageItemType;
            public objectType: FairyGUI.ObjectType;
            public id: string;
            public name: string;
            public width: number;
            public height: number;
            public file: string;
            public exported: boolean;
            public texture: FairyGUI.NTexture;
            public rawData: FairyGUI.Utils.ByteBuffer;
            public branches: System.Array$1<string>;
            public highResolution: System.Array$1<string>;
            public scale9Grid: System.Nullable$1<UnityEngine.Rect>;
            public scaleByTile: boolean;
            public tileGridIndice: number;
            public pixelHitTestData: FairyGUI.PixelHitTestData;
            public interval: number;
            public repeatDelay: number;
            public swing: boolean;
            public frames: System.Array$1<FairyGUI.MovieClip.Frame>;
            public translated: boolean;
            public extensionCreator: FairyGUI.UIObjectFactory.GComponentCreator;
            public bitmapFont: FairyGUI.BitmapFont;
            public audioClip: FairyGUI.NAudioClip;
            public skeletonAnchor: UnityEngine.Vector2;
            public skeletonAsset: any;
            
            public Load():any;
            
            public getBranch():FairyGUI.PackageItem;
            
            public getHighResolution():FairyGUI.PackageItem;
            
            public constructor();
            
        }
        
        
        class DragDropManager extends System.Object{
            
            public static get inst(): FairyGUI.DragDropManager;
            
            
            public get dragAgent(): FairyGUI.GLoader;
            
            
            public get dragging(): boolean;
            
            
            
            public StartDrag($source: FairyGUI.GObject, $icon: string, $sourceData: any, $touchPointID?: number):void;
            
            public Cancel():void;
            
            public constructor();
            
        }
        
        
        class GLoader extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public showErrorSign: boolean;
            public get url(): string;
            public set url(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get fill(): FairyGUI.FillType;
            public set fill(value: FairyGUI.FillType);
            
            public get shrinkOnly(): boolean;
            public set shrinkOnly(value: boolean);
            
            public get autoSize(): boolean;
            public set autoSize(value: boolean);
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            
            public get fillAmount(): number;
            public set fillAmount(value: number);
            
            public get image(): FairyGUI.Image;
            
            
            public get movieClip(): FairyGUI.MovieClip;
            
            
            public get component(): FairyGUI.GComponent;
            
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            
            public Advance($time: number):void;
            
            public constructor();
            
            public Advance($time: number):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        interface IAnimationGear{
            
            playing: boolean;
            frame: number;
            timeScale: number;
            ignoreEngineTimeScale: boolean;
            
            Advance($time: number):void;
            
        }
        
        
        interface EMRenderTarget{
            
            EM_sortingOrder: number;
            
            EM_BeforeUpdate():void;
            
            EM_Update($context: FairyGUI.UpdateContext):void;
            
            EM_Reload():void;
            
        }
        
        
        class EMRenderSupport extends System.Object{
            
            public static orderChanged: boolean;
            public static get packageListReady(): boolean;
            
            
            public static get hasTarget(): boolean;
            
            
            
            public static Add($value: FairyGUI.EMRenderTarget):void;
            
            public static Remove($value: FairyGUI.EMRenderTarget):void;
            
            public static Update():void;
            
            public static Reload():void;
            
            public constructor();
            
        }
        
        
        class GButton extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public sound: FairyGUI.NAudioClip;
            public soundVolumeScale: number;
            public changeStateOnClick: boolean;
            public linkedPopup: FairyGUI.GObject;
            public static UP: string;
            public static DOWN: string;
            public static OVER: string;
            public static SELECTED_OVER: string;
            public static DISABLED: string;
            public static SELECTED_DISABLED: string;
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get selectedIcon(): string;
            public set selectedIcon(value: string);
            
            public get selectedTitle(): string;
            public set selectedTitle(value: string);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get selected(): boolean;
            public set selected(value: boolean);
            
            public get mode(): FairyGUI.ButtonMode;
            public set mode(value: FairyGUI.ButtonMode);
            
            public get relatedController(): FairyGUI.Controller;
            public set relatedController(value: FairyGUI.Controller);
            
            public get relatedPageId(): string;
            public set relatedPageId(value: string);
            
            
            public FireClick($downEffect: boolean, $clickCall?: boolean):void;
            
            public GetTextField():FairyGUI.GTextField;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GComponent extends FairyGUI.GObject implements FairyGUI.IEventDispatcher{
            
            public get rootContainer(): FairyGUI.Container;
            
            
            public get container(): FairyGUI.Container;
            
            
            public get scrollPane(): FairyGUI.ScrollPane;
            
            
            public get onDrop(): FairyGUI.EventListener;
            
            
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            
            public get opaque(): boolean;
            public set opaque(value: boolean);
            
            public get margin(): FairyGUI.Margin;
            public set margin(value: FairyGUI.Margin);
            
            public get childrenRenderOrder(): FairyGUI.ChildrenRenderOrder;
            public set childrenRenderOrder(value: FairyGUI.ChildrenRenderOrder);
            
            public get apexIndex(): number;
            public set apexIndex(value: number);
            
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            
            public get numChildren(): number;
            
            
            public get Controllers(): System.Collections.Generic.List$1<FairyGUI.Controller>;
            
            
            public get clipSoftness(): UnityEngine.Vector2;
            public set clipSoftness(value: UnityEngine.Vector2);
            
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            
            public get reversedMask(): boolean;
            public set reversedMask(value: boolean);
            
            public get baseUserData(): string;
            
            
            public get viewWidth(): number;
            public set viewWidth(value: number);
            
            public get viewHeight(): number;
            public set viewHeight(value: number);
            
            
            public InvalidateBatchingState($childChanged: boolean):void;
            
            public AddChild($child: FairyGUI.GObject):FairyGUI.GObject;
            
            public AddChildAt($child: FairyGUI.GObject, $index: number):FairyGUI.GObject;
            
            public RemoveChild($child: FairyGUI.GObject):FairyGUI.GObject;
            
            public RemoveChild($child: FairyGUI.GObject, $dispose: boolean):FairyGUI.GObject;
            
            public RemoveChildAt($index: number):FairyGUI.GObject;
            
            public RemoveChildAt($index: number, $dispose: boolean):FairyGUI.GObject;
            
            public RemoveChildren():void;
            
            public RemoveChildren($beginIndex: number, $endIndex: number, $dispose: boolean):void;
            
            public GetChildAt($index: number):FairyGUI.GObject;
            
            public GetChild($name: string):FairyGUI.GObject;
            
            public GetChildByPath($path: string):FairyGUI.GObject;
            
            public GetVisibleChild($name: string):FairyGUI.GObject;
            
            public GetChildInGroup($group: FairyGUI.GGroup, $name: string):FairyGUI.GObject;
            
            public GetChildren():System.Array$1<FairyGUI.GObject>;
            
            public GetChildIndex($child: FairyGUI.GObject):number;
            
            public SetChildIndex($child: FairyGUI.GObject, $index: number):void;
            
            public SetChildIndexBefore($child: FairyGUI.GObject, $index: number):number;
            
            public SwapChildren($child1: FairyGUI.GObject, $child2: FairyGUI.GObject):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public IsAncestorOf($obj: FairyGUI.GObject):boolean;
            
            public ChangeChildrenOrder($objs: System.Collections.Generic.IList$1<FairyGUI.GObject>):void;
            
            public AddController($controller: FairyGUI.Controller):void;
            
            public GetControllerAt($index: number):FairyGUI.Controller;
            
            public GetController($name: string):FairyGUI.Controller;
            
            public RemoveController($c: FairyGUI.Controller):void;
            
            public GetTransitionAt($index: number):FairyGUI.Transition;
            
            public GetTransition($name: string):FairyGUI.Transition;
            
            public IsChildInView($child: FairyGUI.GObject):boolean;
            
            public GetFirstChildInView():number;
            
            public SetBoundsChangedFlag():void;
            
            public EnsureBoundsCorrect():void;
            
            public ConstructFromXML($xml: FairyGUI.Utils.XML):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public InvalidateBatchingState():void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        enum ButtonMode{ Common = 0, Check = 1, Radio = 2 }
        
        
        class GComboBox extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public visibleItemCount: number;
            public dropdown: FairyGUI.GComponent;
            public sound: FairyGUI.NAudioClip;
            public soundVolumeScale: number;
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get items(): System.Array$1<string>;
            public set items(value: System.Array$1<string>);
            
            public get icons(): System.Array$1<string>;
            public set icons(value: System.Array$1<string>);
            
            public get values(): System.Array$1<string>;
            public set values(value: System.Array$1<string>);
            
            public get itemList(): System.Collections.Generic.List$1<string>;
            
            
            public get valueList(): System.Collections.Generic.List$1<string>;
            
            
            public get iconList(): System.Collections.Generic.List$1<string>;
            
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            
            public get value(): string;
            public set value(value: string);
            
            public get popupDirection(): FairyGUI.PopupDirection;
            public set popupDirection(value: FairyGUI.PopupDirection);
            
            
            public ApplyListChange():void;
            
            public GetTextField():FairyGUI.GTextField;
            
            public UpdateDropdownList():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        enum PopupDirection{ Auto = 0, Up = 1, Down = 2 }
        
        
        class ScrollPane extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public static TWEEN_TIME_GO: number;
            public static TWEEN_TIME_DEFAULT: number;
            public static PULL_RATIO: number;
            public static get draggingPane(): FairyGUI.ScrollPane;
            
            
            public get onScroll(): FairyGUI.EventListener;
            
            
            public get onScrollEnd(): FairyGUI.EventListener;
            
            
            public get onPullDownRelease(): FairyGUI.EventListener;
            
            
            public get onPullUpRelease(): FairyGUI.EventListener;
            
            
            public get owner(): FairyGUI.GComponent;
            
            
            public get hzScrollBar(): FairyGUI.GScrollBar;
            
            
            public get vtScrollBar(): FairyGUI.GScrollBar;
            
            
            public get header(): FairyGUI.GComponent;
            
            
            public get footer(): FairyGUI.GComponent;
            
            
            public get bouncebackEffect(): boolean;
            public set bouncebackEffect(value: boolean);
            
            public get touchEffect(): boolean;
            public set touchEffect(value: boolean);
            
            public get inertiaDisabled(): boolean;
            public set inertiaDisabled(value: boolean);
            
            public get softnessOnTopOrLeftSide(): boolean;
            public set softnessOnTopOrLeftSide(value: boolean);
            
            public get scrollStep(): number;
            public set scrollStep(value: number);
            
            public get snapToItem(): boolean;
            public set snapToItem(value: boolean);
            
            public get pageMode(): boolean;
            public set pageMode(value: boolean);
            
            public get pageController(): FairyGUI.Controller;
            public set pageController(value: FairyGUI.Controller);
            
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            
            public get decelerationRate(): number;
            public set decelerationRate(value: number);
            
            public get isDragged(): boolean;
            
            
            public get percX(): number;
            public set percX(value: number);
            
            public get percY(): number;
            public set percY(value: number);
            
            public get posX(): number;
            public set posX(value: number);
            
            public get posY(): number;
            public set posY(value: number);
            
            public get isBottomMost(): boolean;
            
            
            public get isRightMost(): boolean;
            
            
            public get currentPageX(): number;
            public set currentPageX(value: number);
            
            public get currentPageY(): number;
            public set currentPageY(value: number);
            
            public get scrollingPosX(): number;
            
            
            public get scrollingPosY(): number;
            
            
            public get contentWidth(): number;
            
            
            public get contentHeight(): number;
            
            
            public get viewWidth(): number;
            public set viewWidth(value: number);
            
            public get viewHeight(): number;
            public set viewHeight(value: number);
            
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public Dispose():void;
            
            public SetPercX($value: number, $ani: boolean):void;
            
            public SetPercY($value: number, $ani: boolean):void;
            
            public SetPosX($value: number, $ani: boolean):void;
            
            public SetPosY($value: number, $ani: boolean):void;
            
            public SetCurrentPageX($value: number, $ani: boolean):void;
            
            public SetCurrentPageY($value: number, $ani: boolean):void;
            
            public ScrollTop():void;
            
            public ScrollTop($ani: boolean):void;
            
            public ScrollBottom():void;
            
            public ScrollBottom($ani: boolean):void;
            
            public ScrollUp():void;
            
            public ScrollUp($ratio: number, $ani: boolean):void;
            
            public ScrollDown():void;
            
            public ScrollDown($ratio: number, $ani: boolean):void;
            
            public ScrollLeft():void;
            
            public ScrollLeft($ratio: number, $ani: boolean):void;
            
            public ScrollRight():void;
            
            public ScrollRight($ratio: number, $ani: boolean):void;
            
            public ScrollToView($obj: FairyGUI.GObject):void;
            
            public ScrollToView($obj: FairyGUI.GObject, $ani: boolean):void;
            
            public ScrollToView($obj: FairyGUI.GObject, $ani: boolean, $setFirst: boolean):void;
            
            public ScrollToView($rect: UnityEngine.Rect, $ani: boolean, $setFirst: boolean):void;
            
            public IsChildInView($obj: FairyGUI.GObject):boolean;
            
            public CancelDragging():void;
            
            public LockHeader($size: number):void;
            
            public LockFooter($size: number):void;
            
            public UpdateScrollBarVisible():void;
            
            public constructor($owner: FairyGUI.GComponent);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        enum ChildrenRenderOrder{ Ascent = 0, Descent = 1, Arch = 2 }
        
        
        class GGroup extends FairyGUI.GObject implements FairyGUI.IEventDispatcher{
            
            public get layout(): FairyGUI.GroupLayoutType;
            public set layout(value: FairyGUI.GroupLayoutType);
            
            public get lineGap(): number;
            public set lineGap(value: number);
            
            public get columnGap(): number;
            public set columnGap(value: number);
            
            public get excludeInvisibles(): boolean;
            public set excludeInvisibles(value: boolean);
            
            public get autoSizeDisabled(): boolean;
            public set autoSizeDisabled(value: boolean);
            
            public get mainGridMinSize(): number;
            public set mainGridMinSize(value: number);
            
            public get mainGridIndex(): number;
            public set mainGridIndex(value: number);
            
            
            public SetBoundsChangedFlag($positionChangedOnly?: boolean):void;
            
            public EnsureBoundsCorrect():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class Transition extends System.Object implements FairyGUI.ITweenListener{
            
            public invalidateBatchingEveryFrame: boolean;
            public get name(): string;
            
            
            public get playing(): boolean;
            
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            
            public Play():void;
            
            public Play($onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public Play($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public Play($times: number, $delay: number, $startTime: number, $endTime: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public PlayReverse():void;
            
            public PlayReverse($onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public PlayReverse($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public ChangePlayTimes($value: number):void;
            
            public SetAutoPlay($autoPlay: boolean, $times: number, $delay: number):void;
            
            public Stop():void;
            
            public Stop($setToComplete: boolean, $processCallback: boolean):void;
            
            public SetPaused($paused: boolean):void;
            
            public Dispose():void;
            
            public SetValue($label: string, ...aParams: any[]):void;
            
            public SetHook($label: string, $callback: FairyGUI.TransitionHook):void;
            
            public ClearHooks():void;
            
            public SetTarget($label: string, $newTarget: FairyGUI.GObject):void;
            
            public SetDuration($label: string, $value: number):void;
            
            public GetLabelTime($label: string):number;
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public constructor($owner: FairyGUI.GComponent);
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor();
            
        }
        
        
        class GGraph extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get shape(): FairyGUI.Shape;
            
            
            
            public ReplaceMe($target: FairyGUI.GObject):void;
            
            public AddBeforeMe($target: FairyGUI.GObject):void;
            
            public AddAfterMe($target: FairyGUI.GObject):void;
            
            public SetNativeObject($obj: FairyGUI.DisplayObject):void;
            
            public DrawRect($aWidth: number, $aHeight: number, $lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color):void;
            
            public DrawRoundRect($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color, $corner: System.Array$1<number>):void;
            
            public DrawEllipse($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color):void;
            
            public DrawPolygon($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color):void;
            
            public DrawPolygon($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color, $lineSize: number, $lineColor: UnityEngine.Color):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        enum GroupLayoutType{ None = 0, Horizontal = 1, Vertical = 2 }
        
        
        class GImage extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            
            public get fillAmount(): number;
            public set fillAmount(value: number);
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GLabel extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get editable(): boolean;
            public set editable(value: boolean);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            
            public GetTextField():FairyGUI.GTextField;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GList extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public defaultItem: string;
            public foldInvisibleItems: boolean;
            public selectionMode: FairyGUI.ListSelectionMode;
            public itemRenderer: FairyGUI.ListItemRenderer;
            public itemProvider: FairyGUI.ListItemProvider;
            public scrollItemToViewOnClick: boolean;
            public get onClickItem(): FairyGUI.EventListener;
            
            
            public get onRightClickItem(): FairyGUI.EventListener;
            
            
            public get layout(): FairyGUI.ListLayoutType;
            public set layout(value: FairyGUI.ListLayoutType);
            
            public get lineCount(): number;
            public set lineCount(value: number);
            
            public get columnCount(): number;
            public set columnCount(value: number);
            
            public get lineGap(): number;
            public set lineGap(value: number);
            
            public get columnGap(): number;
            public set columnGap(value: number);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get autoResizeItem(): boolean;
            public set autoResizeItem(value: boolean);
            
            public get defaultItemSize(): UnityEngine.Vector2;
            public set defaultItemSize(value: UnityEngine.Vector2);
            
            public get itemPool(): FairyGUI.GObjectPool;
            
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            
            public get touchItem(): FairyGUI.GObject;
            
            
            public get isVirtual(): boolean;
            
            
            public get numItems(): number;
            public set numItems(value: number);
            
            
            public GetFromPool($url: string):FairyGUI.GObject;
            
            public AddItemFromPool():FairyGUI.GObject;
            
            public AddItemFromPool($url: string):FairyGUI.GObject;
            
            public RemoveChildToPoolAt($index: number):void;
            
            public RemoveChildToPool($child: FairyGUI.GObject):void;
            
            public RemoveChildrenToPool():void;
            
            public RemoveChildrenToPool($beginIndex: number, $endIndex: number):void;
            
            public GetSelection():System.Collections.Generic.List$1<number>;
            
            public GetSelection($result: System.Collections.Generic.List$1<number>):System.Collections.Generic.List$1<number>;
            
            public AddSelection($index: number, $scrollItToView: boolean):void;
            
            public RemoveSelection($index: number):void;
            
            public ClearSelection():void;
            
            public SelectAll():void;
            
            public SelectNone():void;
            
            public SelectReverse():void;
            
            public EnableSelectionFocusEvents($enabled: boolean):void;
            
            public EnableArrowKeyNavigation($enabled: boolean):void;
            
            public HandleArrowKey($dir: number):number;
            
            public ResizeToFit():void;
            
            public ResizeToFit($itemCount: number):void;
            
            public ResizeToFit($itemCount: number, $minSize: number):void;
            
            public ScrollToView($index: number):void;
            
            public ScrollToView($index: number, $ani: boolean):void;
            
            public ScrollToView($index: number, $ani: boolean, $setFirst: boolean):void;
            
            public ChildIndexToItemIndex($index: number):number;
            
            public ItemIndexToChildIndex($index: number):number;
            
            public SetVirtual():void;
            
            public SetVirtualAndLoop():void;
            
            public RefreshVirtualList():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        enum ListSelectionMode{ Single = 0, Multiple = 1, Multiple_SingleClick = 2, None = 3 }
        
        
        type ListItemRenderer = (index: number, item: FairyGUI.GObject) => void;
        var ListItemRenderer: {new (func: (index: number, item: FairyGUI.GObject) => void): ListItemRenderer;}
        
        
        type ListItemProvider = (index: number) => string;
        var ListItemProvider: {new (func: (index: number) => string): ListItemProvider;}
        
        
        enum ListLayoutType{ SingleColumn = 0, SingleRow = 1, FlowHorizontal = 2, FlowVertical = 3, Pagination = 4 }
        
        
        class GObjectPool extends System.Object{
            
            public initCallback: FairyGUI.GObjectPool.InitCallbackDelegate;
            public get count(): number;
            
            
            
            public Clear():void;
            
            public GetObject($url: string):FairyGUI.GObject;
            
            public ReturnObject($obj: FairyGUI.GObject):void;
            
            public constructor($manager: UnityEngine.Transform);
            
            public constructor();
            
        }
        
        
        enum FillType{ None = 0, Scale = 1, ScaleMatchHeight = 2, ScaleMatchWidth = 3, ScaleFree = 4, ScaleNoBorder = 5 }
        
        
        class GLoader3D extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public get url(): string;
            public set url(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get fill(): FairyGUI.FillType;
            public set fill(value: FairyGUI.FillType);
            
            public get shrinkOnly(): boolean;
            public set shrinkOnly(value: boolean);
            
            public get autoSize(): boolean;
            public set autoSize(value: boolean);
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            public get loop(): boolean;
            public set loop(value: boolean);
            
            public get animationName(): string;
            public set animationName(value: string);
            
            public get skinName(): string;
            public set skinName(value: string);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get wrapTarget(): UnityEngine.GameObject;
            
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            
            public Advance($time: number):void;
            
            public SetWrapTarget($gameObject: UnityEngine.GameObject, $cloneMaterial: boolean, $width: number, $height: number):void;
            
            public constructor();
            
            public Advance($time: number):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GMovieClip extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear{
            
            public get onPlayEnd(): FairyGUI.EventListener;
            
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            
            public Rewind():void;
            
            public SyncStatus($anotherMc: FairyGUI.GMovieClip):void;
            
            public Advance($time: number):void;
            
            public SetPlaySettings($start: number, $end: number, $times: number, $endAt: number):void;
            
            public constructor();
            
            public Advance($time: number):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class Relations extends System.Object{
            
            public handling: FairyGUI.GObject;
            public get isEmpty(): boolean;
            
            
            
            public Add($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public Add($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean):void;
            
            public Remove($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public Contains($target: FairyGUI.GObject):boolean;
            
            public ClearFor($target: FairyGUI.GObject):void;
            
            public ClearAll():void;
            
            public CopyFrom($source: FairyGUI.Relations):void;
            
            public Dispose():void;
            
            public OnOwnerSizeChanged($dWidth: number, $dHeight: number, $applyPivot: boolean):void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer, $parentToChild: boolean):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearXY extends FairyGUI.GearBase implements FairyGUI.ITweenListener{
            
            public positionsInPercent: boolean;
            
            public AddExtStatus($pageId: string, $buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor();
            
        }
        
        
        class GearBase extends System.Object{
            
            public static disableAllTweenEffect: boolean;
            public get controller(): FairyGUI.Controller;
            public set controller(value: FairyGUI.Controller);
            
            public get tweenConfig(): FairyGUI.GearTweenConfig;
            
            
            
            public Dispose():void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public UpdateFromRelations($dx: number, $dy: number):void;
            
            public Apply():void;
            
            public UpdateState():void;
            
        }
        
        
        class GearSize extends FairyGUI.GearBase implements FairyGUI.ITweenListener{
            
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor();
            
        }
        
        
        class GearLook extends FairyGUI.GearBase implements FairyGUI.ITweenListener{
            
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor();
            
        }
        
        
        enum RelationType{ Left_Left = 0, Left_Center = 1, Left_Right = 2, Center_Center = 3, Right_Left = 4, Right_Center = 5, Right_Right = 6, Top_Top = 7, Top_Middle = 8, Top_Bottom = 9, Middle_Middle = 10, Bottom_Top = 11, Bottom_Middle = 12, Bottom_Bottom = 13, Width = 14, Height = 15, LeftExt_Left = 16, LeftExt_Right = 17, RightExt_Left = 18, RightExt_Right = 19, TopExt_Top = 20, TopExt_Bottom = 21, BottomExt_Top = 22, BottomExt_Bottom = 23, Size = 24 }
        
        
        class GRoot extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public static get contentScaleFactor(): number;
            
            
            public static get contentScaleLevel(): number;
            
            
            public static get inst(): FairyGUI.GRoot;
            
            
            public get modalLayer(): FairyGUI.GGraph;
            
            
            public get hasModalWindow(): boolean;
            
            
            public get modalWaiting(): boolean;
            
            
            public get touchTarget(): FairyGUI.GObject;
            
            
            public get hasAnyPopup(): boolean;
            
            
            public get focus(): FairyGUI.GObject;
            public set focus(value: FairyGUI.GObject);
            
            public get soundVolume(): number;
            public set soundVolume(value: number);
            
            
            public SetContentScaleFactor($designResolutionX: number, $designResolutionY: number):void;
            
            public SetContentScaleFactor($designResolutionX: number, $designResolutionY: number, $screenMatchMode: FairyGUI.UIContentScaler.ScreenMatchMode):void;
            
            public SetContentScaleFactor($constantScaleFactor: number):void;
            
            public ApplyContentScaleFactor():void;
            
            public ShowWindow($win: FairyGUI.Window):void;
            
            public HideWindow($win: FairyGUI.Window):void;
            
            public HideWindowImmediately($win: FairyGUI.Window):void;
            
            public HideWindowImmediately($win: FairyGUI.Window, $dispose: boolean):void;
            
            public BringToFront($win: FairyGUI.Window):void;
            
            public ShowModalWait():void;
            
            public CloseModalWait():void;
            
            public CloseAllExceptModals():void;
            
            public CloseAllWindows():void;
            
            public GetTopWindow():FairyGUI.Window;
            
            public DisplayObjectToGObject($obj: FairyGUI.DisplayObject):FairyGUI.GObject;
            
            public ShowPopup($popup: FairyGUI.GObject):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean):void;
            
            public GetPoupPosition($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):UnityEngine.Vector2;
            
            public TogglePopup($popup: FairyGUI.GObject):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean):void;
            
            public HidePopup():void;
            
            public HidePopup($popup: FairyGUI.GObject):void;
            
            public ShowTooltips($msg: string):void;
            
            public ShowTooltips($msg: string, $delay: number):void;
            
            public ShowTooltipsWin($tooltipWin: FairyGUI.GObject):void;
            
            public ShowTooltipsWin($tooltipWin: FairyGUI.GObject, $delay: number):void;
            
            public HideTooltips():void;
            
            public EnableSound():void;
            
            public DisableSound():void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GProgressBar extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            
            public get min(): number;
            public set min(value: number);
            
            public get max(): number;
            public set max(value: number);
            
            public get value(): number;
            public set value(value: number);
            
            public get reverse(): boolean;
            public set reverse(value: boolean);
            
            
            public TweenValue($value: number, $duration: number):FairyGUI.GTweener;
            
            public Update($newValue: number):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GSlider extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public changeOnClick: boolean;
            public canDrag: boolean;
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get onGripTouchEnd(): FairyGUI.EventListener;
            
            
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            
            public get min(): number;
            public set min(value: number);
            
            public get max(): number;
            public set max(value: number);
            
            public get value(): number;
            public set value(value: number);
            
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GRichTextField extends FairyGUI.GTextField implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear{
            
            public get richTextField(): FairyGUI.RichTextField;
            
            
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GTextInput extends FairyGUI.GTextField implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear{
            
            public get inputTextField(): FairyGUI.InputTextField;
            
            
            public get onChanged(): FairyGUI.EventListener;
            
            
            public get onSubmit(): FairyGUI.EventListener;
            
            
            public get editable(): boolean;
            public set editable(value: boolean);
            
            public get hideInput(): boolean;
            public set hideInput(value: boolean);
            
            public get maxLength(): number;
            public set maxLength(value: number);
            
            public get restrict(): string;
            public set restrict(value: string);
            
            public get displayAsPassword(): boolean;
            public set displayAsPassword(value: boolean);
            
            public get caretPosition(): number;
            public set caretPosition(value: number);
            
            public get promptText(): string;
            public set promptText(value: string);
            
            public get keyboardInput(): boolean;
            public set keyboardInput(value: boolean);
            
            public get keyboardType(): number;
            public set keyboardType(value: number);
            
            public get disableIME(): boolean;
            public set disableIME(value: boolean);
            
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            
            public get border(): number;
            public set border(value: number);
            
            public get corner(): number;
            public set corner(value: number);
            
            public get borderColor(): UnityEngine.Color;
            public set borderColor(value: UnityEngine.Color);
            
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            
            
            public SetSelection($start: number, $length: number):void;
            
            public ReplaceSelection($value: string):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GTree extends FairyGUI.GList implements FairyGUI.IEventDispatcher{
            
            public treeNodeRender: FairyGUI.GTree.TreeNodeRenderDelegate;
            public treeNodeWillExpand: FairyGUI.GTree.TreeNodeWillExpandDelegate;
            public get rootNode(): FairyGUI.GTreeNode;
            
            
            public get indent(): number;
            public set indent(value: number);
            
            public get clickToExpand(): number;
            public set clickToExpand(value: number);
            
            
            public GetSelectedNode():FairyGUI.GTreeNode;
            
            public GetSelectedNodes():System.Collections.Generic.List$1<FairyGUI.GTreeNode>;
            
            public GetSelectedNodes($result: System.Collections.Generic.List$1<FairyGUI.GTreeNode>):System.Collections.Generic.List$1<FairyGUI.GTreeNode>;
            
            public SelectNode($node: FairyGUI.GTreeNode):void;
            
            public SelectNode($node: FairyGUI.GTreeNode, $scrollItToView: boolean):void;
            
            public UnselectNode($node: FairyGUI.GTreeNode):void;
            
            public ExpandAll():void;
            
            public ExpandAll($folderNode: FairyGUI.GTreeNode):void;
            
            public CollapseAll():void;
            
            public CollapseAll($folderNode: FairyGUI.GTreeNode):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GTreeNode extends System.Object{
            
            public data: any;
            public get parent(): FairyGUI.GTreeNode;
            
            
            public get tree(): FairyGUI.GTree;
            
            
            public get cell(): FairyGUI.GComponent;
            
            
            public get level(): number;
            
            
            public get expanded(): boolean;
            public set expanded(value: boolean);
            
            public get isFolder(): boolean;
            
            
            public get text(): string;
            public set text(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get numChildren(): number;
            
            
            
            public ExpandToRoot():void;
            
            public AddChild($child: FairyGUI.GTreeNode):FairyGUI.GTreeNode;
            
            public AddChildAt($child: FairyGUI.GTreeNode, $index: number):FairyGUI.GTreeNode;
            
            public RemoveChild($child: FairyGUI.GTreeNode):FairyGUI.GTreeNode;
            
            public RemoveChildAt($index: number):FairyGUI.GTreeNode;
            
            public RemoveChildren($beginIndex?: number, $endIndex?: number):void;
            
            public GetChildAt($index: number):FairyGUI.GTreeNode;
            
            public GetChildIndex($child: FairyGUI.GTreeNode):number;
            
            public GetPrevSibling():FairyGUI.GTreeNode;
            
            public GetNextSibling():FairyGUI.GTreeNode;
            
            public SetChildIndex($child: FairyGUI.GTreeNode, $index: number):void;
            
            public SwapChildren($child1: FairyGUI.GTreeNode, $child2: FairyGUI.GTreeNode):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public constructor($hasChild: boolean);
            
            public constructor($hasChild: boolean, $resURL: string);
            
            public constructor();
            
        }
        
        
        enum ProgressTitleType{ Percent = 0, ValueAndMax = 1, Value = 2, Max = 3 }
        
        
        class Window extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public bringToFontOnClick: boolean;
            public get contentPane(): FairyGUI.GComponent;
            public set contentPane(value: FairyGUI.GComponent);
            
            public get frame(): FairyGUI.GComponent;
            
            
            public get closeButton(): FairyGUI.GObject;
            public set closeButton(value: FairyGUI.GObject);
            
            public get dragArea(): FairyGUI.GObject;
            public set dragArea(value: FairyGUI.GObject);
            
            public get contentArea(): FairyGUI.GObject;
            public set contentArea(value: FairyGUI.GObject);
            
            public get modalWaitingPane(): FairyGUI.GObject;
            
            
            public get isShowing(): boolean;
            
            
            public get isTop(): boolean;
            
            
            public get modal(): boolean;
            public set modal(value: boolean);
            
            public get modalWaiting(): boolean;
            
            
            
            public AddUISource($source: FairyGUI.IUISource):void;
            
            public Show():void;
            
            public ShowOn($r: FairyGUI.GRoot):void;
            
            public Hide():void;
            
            public HideImmediately():void;
            
            public CenterOn($r: FairyGUI.GRoot, $restraint: boolean):void;
            
            public ToggleStatus():void;
            
            public BringToFront():void;
            
            public ShowModalWait():void;
            
            public ShowModalWait($requestingCmd: number):void;
            
            public CloseModalWait():boolean;
            
            public CloseModalWait($requestingCmd: number):boolean;
            
            public Init():void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GScrollBar extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher{
            
            public get minSize(): number;
            
            
            public get gripDragging(): boolean;
            
            
            
            public SetScrollPane($target: FairyGUI.ScrollPane, $vertical: boolean):void;
            
            public SetDisplayPerc($value: number):void;
            
            public setScrollPerc($value: number):void;
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
        }
        
        
        class GearAnimation extends FairyGUI.GearBase{
            
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearTweenConfig extends System.Object{
            
            public tween: boolean;
            public easeType: FairyGUI.EaseType;
            public customEase: FairyGUI.CustomEase;
            public duration: number;
            public delay: number;
            
            public constructor();
            
        }
        
        
        class GearColor extends FairyGUI.GearBase implements FairyGUI.ITweenListener{
            
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public constructor();
            
        }
        
        
        class GearDisplay extends FairyGUI.GearBase{
            
            public get pages(): System.Array$1<string>;
            public set pages(value: System.Array$1<string>);
            
            public get connected(): boolean;
            
            
            
            public AddLock():number;
            
            public ReleaseLock($token: number):void;
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearDisplay2 extends FairyGUI.GearBase{
            
            public condition: number;
            public get pages(): System.Array$1<string>;
            public set pages(value: System.Array$1<string>);
            
            
            public Evaluate($connected: boolean):boolean;
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearFontSize extends FairyGUI.GearBase{
            
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearIcon extends FairyGUI.GearBase{
            
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        class GearText extends FairyGUI.GearBase{
            
            
            public constructor($owner: FairyGUI.GObject);
            
            public constructor();
            
        }
        
        
        interface IUISource{
            
            fileName: string;
            loaded: boolean;
            
            Load($callback: FairyGUI.UILoadCallback):void;
            
        }
        
        
        type UILoadCallback = () => void;
        var UILoadCallback: {new (func: () => void): UILoadCallback;}
        
        
        class UIPackage extends System.Object{
            
            public static unloadBundleByFGUI: boolean;
            public static URL_PREFIX: string;
            public get id(): string;
            
            
            public get name(): string;
            
            
            public static get branch(): string;
            public static set branch(value: string);
            
            public get assetPath(): string;
            
            
            public get customId(): string;
            public set customId(value: string);
            
            public get resBundle(): UnityEngine.AssetBundle;
            
            
            public get dependencies(): System.Array$1<System.Collections.Generic.Dictionary$2<string, string>>;
            
            
            
            public static add_onReleaseResource($value: System.Action$1<FairyGUI.PackageItem>):void;
            
            public static remove_onReleaseResource($value: System.Action$1<FairyGUI.PackageItem>):void;
            
            public static GetVar($key: string):string;
            
            public static SetVar($key: string, $value: string):void;
            
            public static GetById($id: string):FairyGUI.UIPackage;
            
            public static GetByName($name: string):FairyGUI.UIPackage;
            
            public static AddPackage($bundle: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            
            public static AddPackage($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            
            public static AddPackage($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle, $mainAssetName: string):FairyGUI.UIPackage;
            
            public static AddPackage($descFilePath: string):FairyGUI.UIPackage;
            
            public static AddPackage($assetPath: string, $loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            
            public static AddPackage($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            
            public static AddPackage($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResourceAsync):FairyGUI.UIPackage;
            
            public static RemovePackage($packageIdOrName: string):void;
            
            public static RemoveAllPackages():void;
            
            public static GetPackages():System.Collections.Generic.List$1<FairyGUI.UIPackage>;
            
            public static CreateObject($pkgName: string, $resName: string):FairyGUI.GObject;
            
            public static CreateObject($pkgName: string, $resName: string, $userClass: System.Type):FairyGUI.GObject;
            
            public static CreateObjectFromURL($url: string):FairyGUI.GObject;
            
            public static CreateObjectFromURL($url: string, $userClass: System.Type):FairyGUI.GObject;
            
            public static CreateObjectAsync($pkgName: string, $resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public static CreateObjectFromURL($url: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public static GetItemAsset($pkgName: string, $resName: string):any;
            
            public static GetItemAssetByURL($url: string):any;
            
            public static GetItemURL($pkgName: string, $resName: string):string;
            
            public static GetItemByURL($url: string):FairyGUI.PackageItem;
            
            public static NormalizeURL($url: string):string;
            
            public static SetStringsSource($source: FairyGUI.Utils.XML):void;
            
            public LoadAllAssets():void;
            
            public UnloadAssets():void;
            
            public ReloadAssets():void;
            
            public ReloadAssets($resBundle: UnityEngine.AssetBundle):void;
            
            public CreateObject($resName: string):FairyGUI.GObject;
            
            public CreateObject($resName: string, $userClass: System.Type):FairyGUI.GObject;
            
            public CreateObjectAsync($resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public GetItemAsset($resName: string):any;
            
            public GetItems():System.Collections.Generic.List$1<FairyGUI.PackageItem>;
            
            public GetItem($itemId: string):FairyGUI.PackageItem;
            
            public GetItemByName($itemName: string):FairyGUI.PackageItem;
            
            public GetItemAsset($item: FairyGUI.PackageItem):any;
            
            public SetItemAsset($item: FairyGUI.PackageItem, $asset: any, $destroyMethod: FairyGUI.DestroyMethod):void;
            
            public constructor();
            
        }
        
        
        enum PackageItemType{ Image = 0, MovieClip = 1, Sound = 2, Component = 3, Atlas = 4, Font = 5, Swf = 6, Misc = 7, Unknown = 8, Spine = 9, DragoneBones = 10 }
        
        
        enum ObjectType{ Image = 0, MovieClip = 1, Swf = 2, Graph = 3, Loader = 4, Group = 5, Text = 6, RichText = 7, InputText = 8, Component = 9, List = 10, Label = 11, Button = 12, ComboBox = 13, ProgressBar = 14, Slider = 15, ScrollBar = 16, Tree = 17, Loader3D = 18 }
        
        
        type PlayCompleteCallback = () => void;
        var PlayCompleteCallback: {new (func: () => void): PlayCompleteCallback;}
        
        
        type TransitionHook = () => void;
        var TransitionHook: {new (func: () => void): TransitionHook;}
        
        
        class TranslationHelper extends System.Object{
            
            public static strings: System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.Dictionary$2<string, string>>;
            
            public static LoadFromXML($source: FairyGUI.Utils.XML):void;
            
            public static TranslateComponent($item: FairyGUI.PackageItem):void;
            
            public constructor();
            
        }
        
        
        class TreeNode extends System.Object{
            
            public data: any;
            public get parent(): FairyGUI.TreeNode;
            
            
            public get tree(): FairyGUI.TreeView;
            
            
            public get cell(): FairyGUI.GComponent;
            
            
            public get level(): number;
            
            
            public get expanded(): boolean;
            public set expanded(value: boolean);
            
            public get isFolder(): boolean;
            
            
            public get text(): string;
            
            
            public get numChildren(): number;
            
            
            
            public AddChild($child: FairyGUI.TreeNode):FairyGUI.TreeNode;
            
            public AddChildAt($child: FairyGUI.TreeNode, $index: number):FairyGUI.TreeNode;
            
            public RemoveChild($child: FairyGUI.TreeNode):FairyGUI.TreeNode;
            
            public RemoveChildAt($index: number):FairyGUI.TreeNode;
            
            public RemoveChildren($beginIndex?: number, $endIndex?: number):void;
            
            public GetChildAt($index: number):FairyGUI.TreeNode;
            
            public GetChildIndex($child: FairyGUI.TreeNode):number;
            
            public GetPrevSibling():FairyGUI.TreeNode;
            
            public GetNextSibling():FairyGUI.TreeNode;
            
            public SetChildIndex($child: FairyGUI.TreeNode, $index: number):void;
            
            public SwapChildren($child1: FairyGUI.TreeNode, $child2: FairyGUI.TreeNode):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public constructor($hasChild: boolean);
            
            public constructor();
            
        }
        
        
        class TreeView extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher{
            
            public indent: number;
            public treeNodeCreateCell: FairyGUI.TreeView.TreeNodeCreateCellDelegate;
            public treeNodeRender: FairyGUI.TreeView.TreeNodeRenderDelegate;
            public treeNodeWillExpand: FairyGUI.TreeView.TreeNodeWillExpandDelegate;
            public get list(): FairyGUI.GList;
            
            
            public get root(): FairyGUI.TreeNode;
            
            
            public get onClickNode(): FairyGUI.EventListener;
            
            
            public get onRightClickNode(): FairyGUI.EventListener;
            
            
            
            public GetSelectedNode():FairyGUI.TreeNode;
            
            public GetSelection():System.Collections.Generic.List$1<FairyGUI.TreeNode>;
            
            public AddSelection($node: FairyGUI.TreeNode, $scrollItToView?: boolean):void;
            
            public RemoveSelection($node: FairyGUI.TreeNode):void;
            
            public ClearSelection():void;
            
            public GetNodeIndex($node: FairyGUI.TreeNode):number;
            
            public UpdateNode($node: FairyGUI.TreeNode):void;
            
            public UpdateNodes($nodes: System.Collections.Generic.List$1<FairyGUI.TreeNode>):void;
            
            public ExpandAll($folderNode: FairyGUI.TreeNode):void;
            
            public CollapseAll($folderNode: FairyGUI.TreeNode):void;
            
            public constructor($list: FairyGUI.GList);
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public constructor();
            
            public constructor();
            
        }
        
        
        class UIConfig extends UnityEngine.MonoBehaviour{
            
            public static defaultFont: string;
            public static windowModalWaiting: string;
            public static globalModalWaiting: string;
            public static modalLayerColor: UnityEngine.Color;
            public static buttonSound: FairyGUI.NAudioClip;
            public static buttonSoundVolumeScale: number;
            public static horizontalScrollBar: string;
            public static verticalScrollBar: string;
            public static defaultScrollStep: number;
            public static defaultScrollDecelerationRate: number;
            public static defaultScrollBarDisplay: FairyGUI.ScrollBarDisplayType;
            public static defaultScrollTouchEffect: boolean;
            public static defaultScrollBounceEffect: boolean;
            public static popupMenu: string;
            public static popupMenu_seperator: string;
            public static loaderErrorSign: string;
            public static tooltipsWin: string;
            public static defaultComboBoxVisibleItemCount: number;
            public static touchScrollSensitivity: number;
            public static touchDragSensitivity: number;
            public static clickDragSensitivity: number;
            public static allowSoftnessOnTopOrLeftSide: boolean;
            public static bringWindowToFrontOnClick: boolean;
            public static inputCaretSize: number;
            public static inputHighlightColor: UnityEngine.Color;
            public static frameTimeForAsyncUIConstruction: number;
            public static depthSupportForPaintingMode: boolean;
            public static enhancedTextOutlineEffect: boolean;
            public static makePixelPerfect: boolean;
            public Items: System.Collections.Generic.List$1<FairyGUI.UIConfig.ConfigValue>;
            public PreloadPackages: System.Collections.Generic.List$1<string>;
            public static soundLoader: FairyGUI.UIConfig.SoundLoader;
            
            public Load():void;
            
            public static SetDefaultValue($key: FairyGUI.UIConfig.ConfigKey, $value: FairyGUI.UIConfig.ConfigValue):void;
            
            public static ClearResourceRefs():void;
            
            public ApplyModifiedProperties():void;
            
            public constructor();
            
        }
        
        
        enum ScrollBarDisplayType{ Default = 0, Visible = 1, Auto = 2, Hidden = 3 }
        
        
        class UIContentScaler extends UnityEngine.MonoBehaviour{
            
            public scaleMode: FairyGUI.UIContentScaler.ScaleMode;
            public screenMatchMode: FairyGUI.UIContentScaler.ScreenMatchMode;
            public designResolutionX: number;
            public designResolutionY: number;
            public fallbackScreenDPI: number;
            public defaultSpriteDPI: number;
            public constantScaleFactor: number;
            public ignoreOrientation: boolean;
            public static scaleFactor: number;
            public static scaleLevel: number;
            
            public ApplyModifiedProperties():void;
            
            public ApplyChange():void;
            
            public constructor();
            
        }
        
        
        class UIObjectFactory extends System.Object{
            
            
            public static SetPackageItemExtension($url: string, $type: System.Type):void;
            
            public static SetPackageItemExtension($url: string, $creator: FairyGUI.UIObjectFactory.GComponentCreator):void;
            
            public static SetLoaderExtension($type: System.Type):void;
            
            public static SetLoaderExtension($creator: FairyGUI.UIObjectFactory.GLoaderCreator):void;
            
            public static Clear():void;
            
            public static NewObject($pi: FairyGUI.PackageItem, $userClass?: System.Type):FairyGUI.GObject;
            
            public static NewObject($type: FairyGUI.ObjectType):FairyGUI.GObject;
            
            public constructor();
            
        }
        
        
        class UIPainter extends UnityEngine.MonoBehaviour implements FairyGUI.EMRenderTarget{
            
            public packageName: string;
            public componentName: string;
            public sortingOrder: number;
            public get container(): FairyGUI.Container;
            
            
            public get ui(): FairyGUI.GComponent;
            
            
            public get EM_sortingOrder(): number;
            
            
            
            public SetSortingOrder($value: number, $apply: boolean):void;
            
            public CreateUI():void;
            
            public ApplyModifiedProperties($sortingOrderChanged: boolean):void;
            
            public OnUpdateSource($data: System.Array$1<any>):void;
            
            public EM_BeforeUpdate():void;
            
            public EM_Update($context: FairyGUI.UpdateContext):void;
            
            public EM_Reload():void;
            
            public constructor();
            
            public EM_Update($context: FairyGUI.UpdateContext):void;
            
        }
        
        
        class UIPanel extends UnityEngine.MonoBehaviour implements FairyGUI.EMRenderTarget{
            
            public packageName: string;
            public componentName: string;
            public fitScreen: FairyGUI.FitScreen;
            public sortingOrder: number;
            public get container(): FairyGUI.Container;
            
            
            public get ui(): FairyGUI.GComponent;
            
            
            public get EM_sortingOrder(): number;
            
            
            
            public CreateUI():void;
            
            public SetSortingOrder($value: number, $apply: boolean):void;
            
            public SetHitTestMode($value: FairyGUI.HitTestMode):void;
            
            public CacheNativeChildrenRenderers():void;
            
            public ApplyModifiedProperties($sortingOrderChanged: boolean, $fitScreenChanged: boolean):void;
            
            public MoveUI($delta: UnityEngine.Vector3):void;
            
            public GetUIWorldPosition():UnityEngine.Vector3;
            
            public EM_BeforeUpdate():void;
            
            public EM_Update($context: FairyGUI.UpdateContext):void;
            
            public EM_Reload():void;
            
            public constructor();
            
            public EM_Update($context: FairyGUI.UpdateContext):void;
            
        }
        
        
        enum FitScreen{ None = 0, FitSize = 1, FitWidthAndSetMiddle = 2, FitHeightAndSetCenter = 3 }
        
        
        enum HitTestMode{ Default = 0, Raycast = 1 }
        
        
        class Timers extends System.Object{
            
            public static repeat: number;
            public static time: number;
            public static catchCallbackExceptions: boolean;
            public static get inst(): FairyGUI.Timers;
            
            
            
            public Add($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback):void;
            
            public Add($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public CallLater($callback: FairyGUI.TimerCallback):void;
            
            public CallLater($callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public AddUpdate($callback: FairyGUI.TimerCallback):void;
            
            public AddUpdate($callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public StartCoroutine($routine: System.Collections.IEnumerator):void;
            
            public Exists($callback: FairyGUI.TimerCallback):boolean;
            
            public Remove($callback: FairyGUI.TimerCallback):void;
            
            public Update():void;
            
            public constructor();
            
        }
        
        
        type TimerCallback = (param: any) => void;
        var TimerCallback: {new (func: (param: any) => void): TimerCallback;}
        
        
    }
    namespace TMPro {
        
        class TMP_FontAsset extends TMPro.TMP_Asset{
            
            
        }
        
        
        class TMP_Asset extends UnityEngine.ScriptableObject{
            
            
        }
        
        
        enum FontWeight{ Thin = 100, ExtraLight = 200, Light = 300, Regular = 400, Medium = 500, SemiBold = 600, Bold = 700, Heavy = 800, Black = 900 }
        
        
    }
    namespace FairyGUI.TextFormat {
        
        enum SpecialStyle{ None = 0, Superscript = 1, Subscript = 2 }
        
        
    }
    namespace FairyGUI.BlendModeUtils {
        
        class BlendFactor extends System.Object{
            
            public srcFactor: UnityEngine.Rendering.BlendMode;
            public dstFactor: UnityEngine.Rendering.BlendMode;
            public pma: boolean;
            
            public constructor($srcFactor: UnityEngine.Rendering.BlendMode, $dstFactor: UnityEngine.Rendering.BlendMode, $pma?: boolean);
            
            public constructor();
            
        }
        
        
    }
    namespace FairyGUI.Utils {
        
        class ByteBuffer extends System.Object{
            
            
        }
        
        
        interface IHtmlPageContext{
            
            
        }
        
        
        class HtmlParseOptions extends System.Object{
            
            
        }
        
        
        class HtmlElement extends System.Object{
            
            
        }
        
        
        class XML extends System.Object{
            
            
        }
        
        
    }
    namespace FairyGUI.MovieClip {
        
        class Frame extends System.Object{
            
            public texture: FairyGUI.NTexture;
            public addDelay: number;
            
            public constructor();
            
        }
        
        
    }
    namespace FairyGUI.NGraphics {
        
        class VertexMatrix extends System.Object{
            
            public cameraPos: UnityEngine.Vector3;
            public matrix: UnityEngine.Matrix4x4;
            
            public constructor();
            
        }
        
        
    }
    namespace FairyGUI.ShaderConfig {
        
        type GetFunction = (name: string) => UnityEngine.Shader;
        var GetFunction: {new (func: (name: string) => UnityEngine.Shader): GetFunction;}
        
        
    }
    namespace FairyGUI.BitmapFont {
        
        class BMGlyph extends System.Object{
            
            public x: number;
            public y: number;
            public width: number;
            public height: number;
            public advance: number;
            public lineHeight: number;
            public uv: System.Array$1<UnityEngine.Vector2>;
            public channel: number;
            
            public constructor();
            
        }
        
        
    }
    namespace FairyGUI.RTLSupport {
        
        enum DirectionType{ UNKNOW = 0, LTR = 1, RTL = 2, NEUTRAL = 3 }
        
        
    }
    namespace FairyGUI.TextField {
        
        class LineInfo extends System.Object{
            
            public width: number;
            public height: number;
            public baseline: number;
            public charIndex: number;
            public charCount: number;
            public y: number;
            
            public static Borrow():FairyGUI.TextField.LineInfo;
            
            public static Return($value: FairyGUI.TextField.LineInfo):void;
            
            public static Return($values: System.Collections.Generic.List$1<FairyGUI.TextField.LineInfo>):void;
            
            public constructor();
            
        }
        
        
        class CharPosition extends System.ValueType{
            
            public charIndex: number;
            public lineIndex: number;
            public offsetX: number;
            public vertCount: number;
            public width: number;
            public imgIndex: number;
            
        }
        
        
        class LineCharInfo extends System.ValueType{
            
            public width: number;
            public height: number;
            public baseline: number;
            
        }
        
        
    }
    namespace FairyGUI.UpdateContext {
        
        class ClipInfo extends System.ValueType{
            
            public rect: UnityEngine.Rect;
            public clipBox: UnityEngine.Vector4;
            public soft: boolean;
            public softness: UnityEngine.Vector4;
            public clipId: number;
            public rectMaskDepth: number;
            public referenceValue: number;
            public reversed: boolean;
            
        }
        
        
    }
    namespace FairyGUI.GPathPoint {
        
        enum CurveType{ CRSpline = 0, Bezier = 1, CubicBezier = 2, Straight = 3 }
        
        
    }
    namespace FairyGUI.ControllerAction {
        
        enum ActionType{ PlayTransition = 0, ChangePage = 1 }
        
        
    }
    namespace FairyGUI.UIPackage {
        
        type CreateObjectCallback = (result: FairyGUI.GObject) => void;
        var CreateObjectCallback: {new (func: (result: FairyGUI.GObject) => void): CreateObjectCallback;}
        
        
        type LoadResource = (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any;
        var LoadResource: {new (func: (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any): LoadResource;}
        
        
        type LoadResourceAsync = (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void;
        var LoadResourceAsync: {new (func: (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void): LoadResourceAsync;}
        
        
    }
    namespace FairyGUI.GObjectPool {
        
        type InitCallbackDelegate = (obj: FairyGUI.GObject) => void;
        var InitCallbackDelegate: {new (func: (obj: FairyGUI.GObject) => void): InitCallbackDelegate;}
        
        
    }
    namespace FairyGUI.UIContentScaler {
        
        enum ScreenMatchMode{ MatchWidthOrHeight = 0, MatchWidth = 1, MatchHeight = 2 }
        
        
        enum ScaleMode{ ConstantPixelSize = 0, ScaleWithScreenSize = 1, ConstantPhysicalSize = 2 }
        
        
    }
    namespace FairyGUI.GTree {
        
        type TreeNodeRenderDelegate = (node: FairyGUI.GTreeNode, obj: FairyGUI.GComponent) => void;
        var TreeNodeRenderDelegate: {new (func: (node: FairyGUI.GTreeNode, obj: FairyGUI.GComponent) => void): TreeNodeRenderDelegate;}
        
        
        type TreeNodeWillExpandDelegate = (node: FairyGUI.GTreeNode, expand: boolean) => void;
        var TreeNodeWillExpandDelegate: {new (func: (node: FairyGUI.GTreeNode, expand: boolean) => void): TreeNodeWillExpandDelegate;}
        
        
    }
    namespace FairyGUI.UIObjectFactory {
        
        type GComponentCreator = () => FairyGUI.GComponent;
        var GComponentCreator: {new (func: () => FairyGUI.GComponent): GComponentCreator;}
        
        
        type GLoaderCreator = () => FairyGUI.GLoader;
        var GLoaderCreator: {new (func: () => FairyGUI.GLoader): GLoaderCreator;}
        
        
    }
    namespace FairyGUI.TreeView {
        
        type TreeNodeCreateCellDelegate = (node: FairyGUI.TreeNode) => FairyGUI.GComponent;
        var TreeNodeCreateCellDelegate: {new (func: (node: FairyGUI.TreeNode) => FairyGUI.GComponent): TreeNodeCreateCellDelegate;}
        
        
        type TreeNodeRenderDelegate = (node: FairyGUI.TreeNode) => void;
        var TreeNodeRenderDelegate: {new (func: (node: FairyGUI.TreeNode) => void): TreeNodeRenderDelegate;}
        
        
        type TreeNodeWillExpandDelegate = (node: FairyGUI.TreeNode, expand: boolean) => void;
        var TreeNodeWillExpandDelegate: {new (func: (node: FairyGUI.TreeNode, expand: boolean) => void): TreeNodeWillExpandDelegate;}
        
        
    }
    namespace FairyGUI.UIConfig {
        
        class ConfigValue extends System.Object{
            
            public valid: boolean;
            public s: string;
            public i: number;
            public f: number;
            public b: boolean;
            public c: UnityEngine.Color;
            
            public Reset():void;
            
            public constructor();
            
        }
        
        
        type SoundLoader = (url: string) => FairyGUI.NAudioClip;
        var SoundLoader: {new (func: (url: string) => FairyGUI.NAudioClip): SoundLoader;}
        
        
        enum ConfigKey{ DefaultFont = 0, ButtonSound = 1, ButtonSoundVolumeScale = 2, HorizontalScrollBar = 3, VerticalScrollBar = 4, DefaultScrollStep = 5, DefaultScrollBarDisplay = 6, DefaultScrollTouchEffect = 7, DefaultScrollBounceEffect = 8, TouchScrollSensitivity = 9, WindowModalWaiting = 10, GlobalModalWaiting = 11, PopupMenu = 12, PopupMenu_seperator = 13, LoaderErrorSign = 14, TooltipsWin = 15, DefaultComboBoxVisibleItemCount = 16, TouchDragSensitivity = 17, ClickDragSensitivity = 18, ModalLayerColor = 19, RenderingTextBrighterOnDesktop = 20, AllowSoftnessOnTopOrLeftSide = 21, InputCaretSize = 22, InputHighlightColor = 23, EnhancedTextOutlineEffect = 24, DepthSupportForPaintingMode = 25, RichTextRowVerticalAlign = 26, Branch = 27, PleaseSelect = 100 }
        
        
    }
    namespace Spine.Unity {
        
        class AnimationReferenceAsset extends UnityEngine.ScriptableObject implements Spine.Unity.IHasSkeletonDataAsset{
            
            public get SkeletonDataAsset(): Spine.Unity.SkeletonDataAsset;
            
            
            public get Animation(): Spine.Animation;
            
            
            
            public Initialize():void;
            
            public static op_Implicit($asset: Spine.Unity.AnimationReferenceAsset):Spine.Animation;
            
            public constructor();
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            
        }
        
        
        interface IHasSkeletonDataAsset{
            
            SkeletonDataAsset: Spine.Unity.SkeletonDataAsset;
            
        }
        
        
        class SkeletonDataAsset extends UnityEngine.ScriptableObject{
            
            public atlasAssets: System.Array$1<Spine.Unity.AtlasAssetBase>;
            public scale: number;
            public skeletonJSON: UnityEngine.TextAsset;
            public skeletonDataModifiers: System.Collections.Generic.List$1<Spine.Unity.SkeletonDataModifierAsset>;
            public fromAnimation: System.Array$1<string>;
            public toAnimation: System.Array$1<string>;
            public duration: System.Array$1<number>;
            public defaultMix: number;
            public controller: UnityEngine.RuntimeAnimatorController;
            public get IsLoaded(): boolean;
            
            
            
            public static CreateRuntimeInstance($skeletonDataFile: UnityEngine.TextAsset, $atlasAsset: Spine.Unity.AtlasAssetBase, $initialize: boolean, $scale?: number):Spine.Unity.SkeletonDataAsset;
            
            public static CreateRuntimeInstance($skeletonDataFile: UnityEngine.TextAsset, $atlasAssets: System.Array$1<Spine.Unity.AtlasAssetBase>, $initialize: boolean, $scale?: number):Spine.Unity.SkeletonDataAsset;
            
            public Clear():void;
            
            public GetAnimationStateData():Spine.AnimationStateData;
            
            public GetSkeletonData($quiet: boolean):Spine.SkeletonData;
            
            public FillStateData():void;
            
            public constructor();
            
        }
        
        
        class AtlasAssetBase extends UnityEngine.ScriptableObject{
            
            public get PrimaryMaterial(): UnityEngine.Material;
            
            
            public get Materials(): System.Collections.Generic.IEnumerable$1<UnityEngine.Material>;
            
            
            public get MaterialCount(): number;
            
            
            public get IsLoaded(): boolean;
            
            
            
            public Clear():void;
            
            public GetAtlas():Spine.Atlas;
            
        }
        
        
        class EventDataReferenceAsset extends UnityEngine.ScriptableObject{
            
            public get EventData(): Spine.EventData;
            
            
            
            public Initialize():void;
            
            public static op_Implicit($asset: Spine.Unity.EventDataReferenceAsset):Spine.EventData;
            
            public constructor();
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            
        }
        
        
        class RegionlessAttachmentLoader extends System.Object implements Spine.AttachmentLoader{
            
            
            public NewRegionAttachment($skin: Spine.Skin, $name: string, $path: string):Spine.RegionAttachment;
            
            public NewMeshAttachment($skin: Spine.Skin, $name: string, $path: string):Spine.MeshAttachment;
            
            public NewBoundingBoxAttachment($skin: Spine.Skin, $name: string):Spine.BoundingBoxAttachment;
            
            public NewPathAttachment($skin: Spine.Skin, $name: string):Spine.PathAttachment;
            
            public NewPointAttachment($skin: Spine.Skin, $name: string):Spine.PointAttachment;
            
            public NewClippingAttachment($skin: Spine.Skin, $name: string):Spine.ClippingAttachment;
            
            public constructor();
            
        }
        
        
        class SkeletonDataModifierAsset extends UnityEngine.ScriptableObject{
            
            
            public Apply($skeletonData: Spine.SkeletonData):void;
            
        }
        
        
        class SkeletonDataCompatibility extends System.Object{
            
            
            public static GetVersionInfo($asset: UnityEngine.TextAsset):Spine.Unity.SkeletonDataCompatibility.VersionInfo;
            
            public static GetCompatibilityProblemInfo($fileVersion: Spine.Unity.SkeletonDataCompatibility.VersionInfo):Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
            
            public static DisplayCompatibilityProblem($descriptionString: string, $spineJson: UnityEngine.TextAsset):void;
            
        }
        
        
        class SpineAtlasAsset extends Spine.Unity.AtlasAssetBase{
            
            public atlasFile: UnityEngine.TextAsset;
            public materials: System.Array$1<UnityEngine.Material>;
            public get IsLoaded(): boolean;
            
            
            public get Materials(): System.Collections.Generic.IEnumerable$1<UnityEngine.Material>;
            
            
            public get MaterialCount(): number;
            
            
            public get PrimaryMaterial(): UnityEngine.Material;
            
            
            
            public static CreateRuntimeInstance($atlasText: UnityEngine.TextAsset, $materials: System.Array$1<UnityEngine.Material>, $initialize: boolean):Spine.Unity.SpineAtlasAsset;
            
            public static CreateRuntimeInstance($atlasText: UnityEngine.TextAsset, $textures: System.Array$1<UnityEngine.Texture2D>, $materialPropertySource: UnityEngine.Material, $initialize: boolean):Spine.Unity.SpineAtlasAsset;
            
            public static CreateRuntimeInstance($atlasText: UnityEngine.TextAsset, $textures: System.Array$1<UnityEngine.Texture2D>, $shader: UnityEngine.Shader, $initialize: boolean):Spine.Unity.SpineAtlasAsset;
            
            public GenerateMesh($name: string, $mesh: UnityEngine.Mesh, $material: $Ref<UnityEngine.Material>, $scale?: number):UnityEngine.Mesh;
            
            public constructor();
            
        }
        
        
        class MaterialsTextureLoader extends System.Object implements Spine.TextureLoader{
            
            
            public Load($page: Spine.AtlasPage, $path: string):void;
            
            public Unload($texture: any):void;
            
            public constructor($atlasAsset: Spine.Unity.SpineAtlasAsset);
            
            public constructor();
            
        }
        
        
        class SpineSpriteAtlasAsset extends Spine.Unity.AtlasAssetBase{
            
            public spriteAtlasFile: UnityEngine.U2D.SpriteAtlas;
            public materials: System.Array$1<UnityEngine.Material>;
            public updateRegionsInPlayMode: boolean;
            public get IsLoaded(): boolean;
            
            
            public get Materials(): System.Collections.Generic.IEnumerable$1<UnityEngine.Material>;
            
            
            public get MaterialCount(): number;
            
            
            public get PrimaryMaterial(): UnityEngine.Material;
            
            
            public get RegionsNeedLoading(): boolean;
            
            
            
            public static CreateRuntimeInstance($spriteAtlasFile: UnityEngine.U2D.SpriteAtlas, $materials: System.Array$1<UnityEngine.Material>, $initialize: boolean):Spine.Unity.SpineSpriteAtlasAsset;
            
            public static UpdateByStartingEditorPlayMode():void;
            
            public static AnySpriteAtlasNeedsRegionsLoaded():boolean;
            
            public static UpdateWhenEditorPlayModeStarted():void;
            
            public LoadRegionsInEditorPlayMode():void;
            
            public static AccessPackedTextureEditor($spriteAtlas: UnityEngine.U2D.SpriteAtlas):UnityEngine.Texture2D;
            
            public static AccessPackedTexture($sprites: System.Array$1<UnityEngine.Sprite>):UnityEngine.Texture2D;
            
            public static AccessPackedSprites($spriteAtlas: UnityEngine.U2D.SpriteAtlas):System.Array$1<UnityEngine.Sprite>;
            
            public constructor();
            
        }
        
        
        class BoneFollower extends UnityEngine.MonoBehaviour{
            
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            public boneName: string;
            public followXYPosition: boolean;
            public followZPosition: boolean;
            public followBoneRotation: boolean;
            public followSkeletonFlip: boolean;
            public followLocalScale: boolean;
            public initializeOnAwake: boolean;
            public valid: boolean;
            public bone: Spine.Bone;
            public get SkeletonRenderer(): Spine.Unity.SkeletonRenderer;
            public set SkeletonRenderer(value: Spine.Unity.SkeletonRenderer);
            
            
            public SetBone($name: string):boolean;
            
            public Awake():void;
            
            public HandleRebuildRenderer($skeletonRenderer: Spine.Unity.SkeletonRenderer):void;
            
            public Initialize():void;
            
            public LateUpdate():void;
            
            public constructor();
            
        }
        
        
        class SkeletonRenderer extends UnityEngine.MonoBehaviour implements Spine.Unity.IHasSkeletonDataAsset, Spine.Unity.ISkeletonComponent{
            
            public skeletonDataAsset: Spine.Unity.SkeletonDataAsset;
            public initialSkinName: string;
            public initialFlipX: boolean;
            public initialFlipY: boolean;
            public updateWhenInvisible: Spine.Unity.UpdateMode;
            public separatorSlots: System.Collections.Generic.List$1<Spine.Slot>;
            public zSpacing: number;
            public useClipping: boolean;
            public immutableTriangles: boolean;
            public pmaVertexColors: boolean;
            public clearStateOnDisable: boolean;
            public tintBlack: boolean;
            public singleSubmesh: boolean;
            public fixDrawOrder: boolean;
            public addNormals: boolean;
            public calculateTangents: boolean;
            public maskInteraction: UnityEngine.SpriteMaskInteraction;
            public maskMaterials: Spine.Unity.SkeletonRenderer.SpriteMaskInteractionMaterials;
            public static STENCIL_COMP_PARAM_ID: number;
            public static STENCIL_COMP_MASKINTERACTION_NONE: UnityEngine.Rendering.CompareFunction;
            public static STENCIL_COMP_MASKINTERACTION_VISIBLE_INSIDE: UnityEngine.Rendering.CompareFunction;
            public static STENCIL_COMP_MASKINTERACTION_VISIBLE_OUTSIDE: UnityEngine.Rendering.CompareFunction;
            public disableRenderingOnOverride: boolean;
            public valid: boolean;
            public skeleton: Spine.Skeleton;
            public static SUBMESH_DUMMY_PARAM_ID: number;
            public get EditorSkipSkinSync(): boolean;
            public set EditorSkipSkinSync(value: boolean);
            
            public get UpdateMode(): Spine.Unity.UpdateMode;
            public set UpdateMode(value: Spine.Unity.UpdateMode);
            
            public get CustomMaterialOverride(): System.Collections.Generic.Dictionary$2<UnityEngine.Material, UnityEngine.Material>;
            
            
            public get CustomSlotMaterials(): System.Collections.Generic.Dictionary$2<Spine.Slot, UnityEngine.Material>;
            
            
            public get Skeleton(): Spine.Skeleton;
            
            
            public get SkeletonDataAsset(): Spine.Unity.SkeletonDataAsset;
            
            
            
            public add_GenerateMeshOverride($value: Spine.Unity.SkeletonRenderer.InstructionDelegate):void;
            
            public remove_GenerateMeshOverride($value: Spine.Unity.SkeletonRenderer.InstructionDelegate):void;
            
            public add_OnPostProcessVertices($value: Spine.Unity.MeshGeneratorDelegate):void;
            
            public remove_OnPostProcessVertices($value: Spine.Unity.MeshGeneratorDelegate):void;
            
            public add_OnRebuild($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate):void;
            
            public remove_OnRebuild($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate):void;
            
            public add_OnMeshAndMaterialsUpdated($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate):void;
            
            public remove_OnMeshAndMaterialsUpdated($value: Spine.Unity.SkeletonRenderer.SkeletonRendererDelegate):void;
            
            public SetMeshSettings($settings: Spine.Unity.MeshGenerator.Settings):void;
            
            public Awake():void;
            
            public ClearState():void;
            
            public EnsureMeshGeneratorCapacity($minimumVertexCount: number):void;
            
            public Initialize($overwrite: boolean):void;
            
            public LateUpdate():void;
            
            public OnBecameVisible():void;
            
            public OnBecameInvisible():void;
            
            public FindAndApplySeparatorSlots($startsWith: string, $clearExistingSeparators?: boolean, $updateStringArray?: boolean):void;
            
            public FindAndApplySeparatorSlots($slotNamePredicate: System.Func$2<string, boolean>, $clearExistingSeparators?: boolean, $updateStringArray?: boolean):void;
            
            public ReapplySeparatorSlotNames():void;
            
            public constructor();
            
        }
        
        
        interface ISkeletonComponent{
            
            SkeletonDataAsset: Spine.Unity.SkeletonDataAsset;
            Skeleton: Spine.Skeleton;
            
        }
        
        
        class BoneFollowerGraphic extends UnityEngine.MonoBehaviour{
            
            public skeletonGraphic: Spine.Unity.SkeletonGraphic;
            public initializeOnAwake: boolean;
            public boneName: string;
            public followBoneRotation: boolean;
            public followSkeletonFlip: boolean;
            public followLocalScale: boolean;
            public followXYPosition: boolean;
            public followZPosition: boolean;
            public bone: Spine.Bone;
            public valid: boolean;
            public get SkeletonGraphic(): Spine.Unity.SkeletonGraphic;
            public set SkeletonGraphic(value: Spine.Unity.SkeletonGraphic);
            
            
            public SetBone($name: string):boolean;
            
            public Awake():void;
            
            public Initialize():void;
            
            public LateUpdate():void;
            
            public constructor();
            
        }
        
        
        class SkeletonGraphic extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, Spine.Unity.IHasSkeletonDataAsset, Spine.Unity.ISkeletonComponent, Spine.Unity.IAnimationStateComponent, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable, Spine.Unity.ISkeletonAnimation{
            
            public skeletonDataAsset: Spine.Unity.SkeletonDataAsset;
            public initialSkinName: string;
            public initialFlipX: boolean;
            public initialFlipY: boolean;
            public startingAnimation: string;
            public startingLoop: boolean;
            public timeScale: number;
            public freeze: boolean;
            public updateWhenInvisible: Spine.Unity.UpdateMode;
            public unscaledTime: boolean;
            public allowMultipleCanvasRenderers: boolean;
            public canvasRenderers: System.Collections.Generic.List$1<UnityEngine.CanvasRenderer>;
            public static SeparatorPartGameObjectName: string;
            public separatorSlots: System.Collections.Generic.List$1<Spine.Slot>;
            public enableSeparatorSlots: boolean;
            public updateSeparatorPartLocation: boolean;
            public get SkeletonDataAsset(): Spine.Unity.SkeletonDataAsset;
            
            
            public get UpdateMode(): Spine.Unity.UpdateMode;
            public set UpdateMode(value: Spine.Unity.UpdateMode);
            
            public get SeparatorParts(): System.Collections.Generic.List$1<UnityEngine.Transform>;
            
            
            public get CustomTextureOverride(): System.Collections.Generic.Dictionary$2<UnityEngine.Texture, UnityEngine.Texture>;
            
            
            public get CustomMaterialOverride(): System.Collections.Generic.Dictionary$2<UnityEngine.Texture, UnityEngine.Material>;
            
            
            public get OverrideTexture(): UnityEngine.Texture;
            public set OverrideTexture(value: UnityEngine.Texture);
            
            public get mainTexture(): UnityEngine.Texture;
            
            
            public get Skeleton(): Spine.Skeleton;
            public set Skeleton(value: Spine.Skeleton);
            
            public get SkeletonData(): Spine.SkeletonData;
            
            
            public get IsValid(): boolean;
            
            
            public get AnimationState(): Spine.AnimationState;
            
            
            public get MeshGenerator(): Spine.Unity.MeshGenerator;
            
            
            
            public static NewSkeletonGraphicGameObject($skeletonDataAsset: Spine.Unity.SkeletonDataAsset, $parent: UnityEngine.Transform, $material: UnityEngine.Material):Spine.Unity.SkeletonGraphic;
            
            public static AddSkeletonGraphicComponent($gameObject: UnityEngine.GameObject, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset, $material: UnityEngine.Material):Spine.Unity.SkeletonGraphic;
            
            public Update():void;
            
            public Update($deltaTime: number):void;
            
            public LateUpdate():void;
            
            public OnBecameVisible():void;
            
            public OnBecameInvisible():void;
            
            public ReapplySeparatorSlotNames():void;
            
            public add_OnRebuild($value: Spine.Unity.SkeletonGraphic.SkeletonRendererDelegate):void;
            
            public remove_OnRebuild($value: Spine.Unity.SkeletonGraphic.SkeletonRendererDelegate):void;
            
            public add_OnMeshAndMaterialsUpdated($value: Spine.Unity.SkeletonGraphic.SkeletonRendererDelegate):void;
            
            public remove_OnMeshAndMaterialsUpdated($value: Spine.Unity.SkeletonGraphic.SkeletonRendererDelegate):void;
            
            public GetLastMesh():UnityEngine.Mesh;
            
            public MatchRectTransformWithBounds():boolean;
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_OnPostProcessVertices($value: Spine.Unity.MeshGeneratorDelegate):void;
            
            public remove_OnPostProcessVertices($value: Spine.Unity.MeshGeneratorDelegate):void;
            
            public Clear():void;
            
            public TrimRenderers():void;
            
            public Initialize($overwrite: boolean):void;
            
            public UpdateMesh():void;
            
            public HasMultipleSubmeshInstructions():boolean;
            
            public constructor();
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
        }
        
        
        interface IAnimationStateComponent{
            
            AnimationState: Spine.AnimationState;
            
        }
        
        
        interface ISkeletonAnimation{
            
            Skeleton: Spine.Skeleton;
            
            add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
        }
        
        
        class BoundingBoxFollower extends UnityEngine.MonoBehaviour{
            
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            public slotName: string;
            public isTrigger: boolean;
            public clearStateOnDisable: boolean;
            public colliderTable: System.Collections.Generic.Dictionary$2<Spine.BoundingBoxAttachment, UnityEngine.PolygonCollider2D>;
            public nameTable: System.Collections.Generic.Dictionary$2<Spine.BoundingBoxAttachment, string>;
            public get Slot(): Spine.Slot;
            
            
            public get CurrentAttachment(): Spine.BoundingBoxAttachment;
            
            
            public get CurrentAttachmentName(): string;
            
            
            public get CurrentCollider(): UnityEngine.PolygonCollider2D;
            
            
            public get IsTrigger(): boolean;
            
            
            
            public Initialize($overwrite?: boolean):void;
            
            public ClearState():void;
            
            public constructor();
            
        }
        
        
        class PointFollower extends UnityEngine.MonoBehaviour implements Spine.Unity.IHasSkeletonRenderer, Spine.Unity.IHasSkeletonComponent{
            
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            public slotName: string;
            public pointAttachmentName: string;
            public followRotation: boolean;
            public followSkeletonFlip: boolean;
            public followSkeletonZPosition: boolean;
            public get SkeletonRenderer(): Spine.Unity.SkeletonRenderer;
            
            
            public get SkeletonComponent(): Spine.Unity.ISkeletonComponent;
            
            
            public get IsValid(): boolean;
            
            
            
            public Initialize():void;
            
            public LateUpdate():void;
            
            public constructor();
            
        }
        
        
        interface IHasSkeletonRenderer{
            
            SkeletonRenderer: Spine.Unity.SkeletonRenderer;
            
        }
        
        
        interface IHasSkeletonComponent{
            
            SkeletonComponent: Spine.Unity.ISkeletonComponent;
            
        }
        
        
        class SkeletonMecanimRootMotion extends Spine.Unity.SkeletonRootMotionBase{
            
            public mecanimLayerFlags: number;
            public get SkeletonMecanim(): Spine.Unity.SkeletonMecanim;
            
            
            
            public constructor();
            
        }
        
        
        class SkeletonRootMotionBase extends UnityEngine.MonoBehaviour{
            
            public transformPositionX: boolean;
            public transformPositionY: boolean;
            public rigidBody2D: UnityEngine.Rigidbody2D;
            public rigidBody: UnityEngine.Rigidbody;
            public get UsesRigidbody(): boolean;
            
            
            
            public SetRootMotionBone($name: string):void;
            
        }
        
        
        class SkeletonMecanim extends Spine.Unity.SkeletonRenderer implements Spine.Unity.IHasSkeletonDataAsset, Spine.Unity.ISkeletonComponent, Spine.Unity.ISkeletonAnimation{
            
            public get Translator(): Spine.Unity.SkeletonMecanim.MecanimTranslator;
            
            
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public Update():void;
            
            public constructor();
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
        }
        
        
        class SkeletonRootMotion extends Spine.Unity.SkeletonRootMotionBase{
            
            public animationTrackFlags: number;
            
            public constructor();
            
        }
        
        
        class SkeletonAnimation extends Spine.Unity.SkeletonRenderer implements Spine.Unity.IHasSkeletonDataAsset, Spine.Unity.ISkeletonComponent, Spine.Unity.IAnimationStateComponent, Spine.Unity.ISkeletonAnimation{
            
            public state: Spine.AnimationState;
            public loop: boolean;
            public timeScale: number;
            public get AnimationState(): Spine.AnimationState;
            
            
            public get AnimationName(): string;
            public set AnimationName(value: string);
            
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public static AddToGameObject($gameObject: UnityEngine.GameObject, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset):Spine.Unity.SkeletonAnimation;
            
            public static NewSkeletonAnimationGameObject($skeletonDataAsset: Spine.Unity.SkeletonDataAsset):Spine.Unity.SkeletonAnimation;
            
            public Update($deltaTime: number):void;
            
            public constructor();
            
            public add_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateLocal($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateWorld($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public add_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
            public remove_UpdateComplete($value: Spine.Unity.UpdateBonesDelegate):void;
            
        }
        
        
        type UpdateBonesDelegate = (animated: Spine.Unity.ISkeletonAnimation) => void;
        var UpdateBonesDelegate: {new (func: (animated: Spine.Unity.ISkeletonAnimation) => void): UpdateBonesDelegate;}
        
        
        enum UpdateMode{ Nothing = 0, OnlyAnimationStatus = 1, EverythingExceptMesh = 2, FullUpdate = 3 }
        
        
        class MeshGenerator extends System.Object{
            
            public settings: Spine.Unity.MeshGenerator.Settings;
            public get VertexCount(): number;
            
            
            public get Buffers(): Spine.Unity.MeshGeneratorBuffers;
            
            
            
            public static GenerateSingleSubmeshInstruction($instructionOutput: Spine.Unity.SkeletonRendererInstruction, $skeleton: Spine.Skeleton, $material: UnityEngine.Material):void;
            
            public static RequiresMultipleSubmeshesByDrawOrder($skeleton: Spine.Skeleton):boolean;
            
            public static GenerateSkeletonRendererInstruction($instructionOutput: Spine.Unity.SkeletonRendererInstruction, $skeleton: Spine.Skeleton, $customSlotMaterials: System.Collections.Generic.Dictionary$2<Spine.Slot, UnityEngine.Material>, $separatorSlots: System.Collections.Generic.List$1<Spine.Slot>, $generateMeshOverride: boolean, $immutableTriangles?: boolean):void;
            
            public static TryReplaceMaterials($workingSubmeshInstructions: Spine.ExposedList$1<Spine.Unity.SubmeshInstruction>, $customMaterialOverride: System.Collections.Generic.Dictionary$2<UnityEngine.Material, UnityEngine.Material>):void;
            
            public Begin():void;
            
            public AddSubmesh($instruction: Spine.Unity.SubmeshInstruction, $updateTriangles?: boolean):void;
            
            public BuildMesh($instruction: Spine.Unity.SkeletonRendererInstruction, $updateTriangles: boolean):void;
            
            public BuildMeshWithArrays($instruction: Spine.Unity.SkeletonRendererInstruction, $updateTriangles: boolean):void;
            
            public ScaleVertexData($scale: number):void;
            
            public FillVertexData($mesh: UnityEngine.Mesh):void;
            
            public FillLateVertexData($mesh: UnityEngine.Mesh):void;
            
            public FillTriangles($mesh: UnityEngine.Mesh):void;
            
            public EnsureVertexCapacity($minimumVertexCount: number, $inlcudeTintBlack?: boolean, $includeTangents?: boolean, $includeNormals?: boolean):void;
            
            public TrimExcess():void;
            
            public static FillMeshLocal($mesh: UnityEngine.Mesh, $regionAttachment: Spine.RegionAttachment):void;
            
            public static FillMeshLocal($mesh: UnityEngine.Mesh, $meshAttachment: Spine.MeshAttachment, $skeletonData: Spine.SkeletonData):void;
            
            public constructor();
            
        }
        
        
        type MeshGeneratorDelegate = (buffers: Spine.Unity.MeshGeneratorBuffers) => void;
        var MeshGeneratorDelegate: {new (func: (buffers: Spine.Unity.MeshGeneratorBuffers) => void): MeshGeneratorDelegate;}
        
        
        class MeshGeneratorBuffers extends System.ValueType{
            
            public vertexCount: number;
            public vertexBuffer: System.Array$1<UnityEngine.Vector3>;
            public uvBuffer: System.Array$1<UnityEngine.Vector2>;
            public colorBuffer: System.Array$1<UnityEngine.Color32>;
            public meshGenerator: Spine.Unity.MeshGenerator;
            
        }
        
        
        class SkeletonPartsRenderer extends UnityEngine.MonoBehaviour{
            
            public get MeshGenerator(): Spine.Unity.MeshGenerator;
            
            
            public get MeshRenderer(): UnityEngine.MeshRenderer;
            
            
            public get MeshFilter(): UnityEngine.MeshFilter;
            
            
            
            public ClearMesh():void;
            
            public RenderParts($instructions: Spine.ExposedList$1<Spine.Unity.SubmeshInstruction>, $startSubmesh: number, $endSubmesh: number):void;
            
            public SetPropertyBlock($block: UnityEngine.MaterialPropertyBlock):void;
            
            public static NewPartsRendererGameObject($parent: UnityEngine.Transform, $name: string, $sortingOrder?: number):Spine.Unity.SkeletonPartsRenderer;
            
            public constructor();
            
        }
        
        
        class SubmeshInstruction extends System.ValueType{
            
            public skeleton: Spine.Skeleton;
            public startSlot: number;
            public endSlot: number;
            public material: UnityEngine.Material;
            public forceSeparate: boolean;
            public preActiveClippingSlotSource: number;
            public rawTriangleCount: number;
            public rawVertexCount: number;
            public rawFirstVertexIndex: number;
            public hasClipping: boolean;
            public get SlotCount(): number;
            
            
            
        }
        
        
        class SkeletonRenderSeparator extends UnityEngine.MonoBehaviour{
            
            public static DefaultSortingOrderIncrement: number;
            public copyPropertyBlock: boolean;
            public copyMeshRendererFlags: boolean;
            public partsRenderers: System.Collections.Generic.List$1<Spine.Unity.SkeletonPartsRenderer>;
            public get SkeletonRenderer(): Spine.Unity.SkeletonRenderer;
            public set SkeletonRenderer(value: Spine.Unity.SkeletonRenderer);
            
            
            public static AddToSkeletonRenderer($skeletonRenderer: Spine.Unity.SkeletonRenderer, $sortingLayerID?: number, $extraPartsRenderers?: number, $sortingOrderIncrement?: number, $baseSortingOrder?: number, $addMinimumPartsRenderers?: boolean):Spine.Unity.SkeletonRenderSeparator;
            
            public AddPartsRenderer($sortingOrderIncrement?: number, $name?: string):Spine.Unity.SkeletonPartsRenderer;
            
            public OnEnable():void;
            
            public OnDisable():void;
            
            public constructor();
            
        }
        
        
        class SkeletonRendererInstruction extends System.Object{
            
            public submeshInstructions: Spine.ExposedList$1<Spine.Unity.SubmeshInstruction>;
            public immutableTriangles: boolean;
            public hasActiveClipping: boolean;
            public rawVertexCount: number;
            public attachments: Spine.ExposedList$1<Spine.Attachment>;
            
            public Clear():void;
            
            public Dispose():void;
            
            public SetWithSubset($instructions: Spine.ExposedList$1<Spine.Unity.SubmeshInstruction>, $startSubmesh: number, $endSubmesh: number):void;
            
            public Set($other: Spine.Unity.SkeletonRendererInstruction):void;
            
            public static GeometryNotEqual($a: Spine.Unity.SkeletonRendererInstruction, $b: Spine.Unity.SkeletonRendererInstruction):boolean;
            
            public constructor();
            
        }
        
        
        class SkeletonGraphicCustomMaterials extends UnityEngine.MonoBehaviour{
            
            public skeletonGraphic: Spine.Unity.SkeletonGraphic;
            
            public constructor();
            
        }
        
        
        class SkeletonRendererCustomMaterials extends UnityEngine.MonoBehaviour{
            
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            
            public constructor();
            
        }
        
        
        class ActivateBasedOnFlipDirection extends UnityEngine.MonoBehaviour{
            
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            public skeletonGraphic: Spine.Unity.SkeletonGraphic;
            public activeOnNormalX: UnityEngine.GameObject;
            public activeOnFlippedX: UnityEngine.GameObject;
            
            public constructor();
            
        }
        
        
        class FollowLocationRigidbody extends UnityEngine.MonoBehaviour{
            
            public reference: UnityEngine.Transform;
            
            public constructor();
            
        }
        
        
        class FollowLocationRigidbody2D extends UnityEngine.MonoBehaviour{
            
            public reference: UnityEngine.Transform;
            public followFlippedX: boolean;
            
            public constructor();
            
        }
        
        
        class FollowSkeletonUtilityRootRotation extends UnityEngine.MonoBehaviour{
            
            public reference: UnityEngine.Transform;
            
            public constructor();
            
        }
        
        
        class SkeletonUtility extends UnityEngine.MonoBehaviour{
            
            public boneRoot: UnityEngine.Transform;
            public flipBy180DegreeRotation: boolean;
            public skeletonRenderer: Spine.Unity.SkeletonRenderer;
            public skeletonGraphic: Spine.Unity.SkeletonGraphic;
            public skeletonAnimation: Spine.Unity.ISkeletonAnimation;
            public boneComponents: System.Collections.Generic.List$1<Spine.Unity.SkeletonUtilityBone>;
            public constraintComponents: System.Collections.Generic.List$1<Spine.Unity.SkeletonUtilityConstraint>;
            public get SkeletonComponent(): Spine.Unity.ISkeletonComponent;
            
            
            public get Skeleton(): Spine.Skeleton;
            
            
            public get IsValid(): boolean;
            
            
            public get PositionScale(): number;
            
            
            
            public static AddBoundingBoxGameObject($skeleton: Spine.Skeleton, $skinName: string, $slotName: string, $attachmentName: string, $parent: UnityEngine.Transform, $isTrigger?: boolean):UnityEngine.PolygonCollider2D;
            
            public static AddBoundingBoxGameObject($name: string, $box: Spine.BoundingBoxAttachment, $slot: Spine.Slot, $parent: UnityEngine.Transform, $isTrigger?: boolean):UnityEngine.PolygonCollider2D;
            
            public static AddBoundingBoxAsComponent($box: Spine.BoundingBoxAttachment, $slot: Spine.Slot, $gameObject: UnityEngine.GameObject, $isTrigger?: boolean):UnityEngine.PolygonCollider2D;
            
            public static SetColliderPointsLocal($collider: UnityEngine.PolygonCollider2D, $slot: Spine.Slot, $box: Spine.BoundingBoxAttachment):void;
            
            public static GetBoundingBoxBounds($boundingBox: Spine.BoundingBoxAttachment, $depth?: number):UnityEngine.Bounds;
            
            public static AddBoneRigidbody2D($gameObject: UnityEngine.GameObject, $isKinematic?: boolean, $gravityScale?: number):UnityEngine.Rigidbody2D;
            
            public add_OnReset($value: Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate):void;
            
            public remove_OnReset($value: Spine.Unity.SkeletonUtility.SkeletonUtilityDelegate):void;
            
            public ResubscribeEvents():void;
            
            public RegisterBone($bone: Spine.Unity.SkeletonUtilityBone):void;
            
            public UnregisterBone($bone: Spine.Unity.SkeletonUtilityBone):void;
            
            public RegisterConstraint($constraint: Spine.Unity.SkeletonUtilityConstraint):void;
            
            public UnregisterConstraint($constraint: Spine.Unity.SkeletonUtilityConstraint):void;
            
            public CollectBones():void;
            
            public GetBoneRoot():UnityEngine.Transform;
            
            public SpawnRoot($mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean):UnityEngine.GameObject;
            
            public SpawnHierarchy($mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean):UnityEngine.GameObject;
            
            public SpawnBoneRecursively($bone: Spine.Bone, $parent: UnityEngine.Transform, $mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean):UnityEngine.GameObject;
            
            public SpawnBone($bone: Spine.Bone, $parent: UnityEngine.Transform, $mode: Spine.Unity.SkeletonUtilityBone.Mode, $pos: boolean, $rot: boolean, $sca: boolean):UnityEngine.GameObject;
            
            public constructor();
            
        }
        
        
        class SkeletonUtilityBone extends UnityEngine.MonoBehaviour{
            
            public boneName: string;
            public parentReference: UnityEngine.Transform;
            public mode: Spine.Unity.SkeletonUtilityBone.Mode;
            public position: boolean;
            public rotation: boolean;
            public scale: boolean;
            public zPosition: boolean;
            public overrideAlpha: number;
            public hierarchy: Spine.Unity.SkeletonUtility;
            public bone: Spine.Bone;
            public transformLerpComplete: boolean;
            public valid: boolean;
            public get IncompatibleTransformMode(): boolean;
            
            
            
            public Reset():void;
            
            public DoUpdate($phase: Spine.Unity.SkeletonUtilityBone.UpdatePhase):void;
            
            public static BoneTransformModeIncompatible($bone: Spine.Bone):boolean;
            
            public AddBoundingBox($skinName: string, $slotName: string, $attachmentName: string):void;
            
            public constructor();
            
        }
        
        
        class SkeletonUtilityConstraint extends UnityEngine.MonoBehaviour{
            
            
            public DoUpdate():void;
            
        }
        
        
        class MeshRendererBuffers extends System.Object implements System.IDisposable{
            
            
            public Initialize():void;
            
            public GetUpdatedSharedMaterialsArray():System.Array$1<UnityEngine.Material>;
            
            public MaterialsChangedInLastUpdate():boolean;
            
            public UpdateSharedMaterials($instructions: Spine.ExposedList$1<Spine.Unity.SubmeshInstruction>):void;
            
            public GetNextMesh():Spine.Unity.MeshRendererBuffers.SmartMesh;
            
            public Clear():void;
            
            public Dispose():void;
            
            public constructor();
            
        }
        
        
        class SpineMesh extends System.Object{
            
            
            public static NewSkeletonMesh():UnityEngine.Mesh;
            
        }
        
        
        class BlendModeMaterialsAsset extends Spine.Unity.SkeletonDataModifierAsset{
            
            public multiplyMaterialTemplate: UnityEngine.Material;
            public screenMaterialTemplate: UnityEngine.Material;
            public additiveMaterialTemplate: UnityEngine.Material;
            public applyAdditiveMaterial: boolean;
            
            public static ApplyMaterials($skeletonData: Spine.SkeletonData, $multiplyTemplate: UnityEngine.Material, $screenTemplate: UnityEngine.Material, $additiveTemplate: UnityEngine.Material, $includeAdditiveSlots: boolean):void;
            
            public constructor();
            
        }
        
        
        class SpineAttributeBase extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute{
            
            public dataField: string;
            public startsWith: string;
            public includeNone: boolean;
            public fallbackToTextField: boolean;
            
        }
        
        
        class SpineBone extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            
            public static GetBone($boneName: string, $renderer: Spine.Unity.SkeletonRenderer):Spine.Bone;
            
            public static GetBoneData($boneName: string, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset):Spine.BoneData;
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineSlot extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            public containsBoundingBoxes: boolean;
            
            public constructor($startsWith?: string, $dataField?: string, $containsBoundingBoxes?: boolean, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineAnimation extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineEvent extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            public audioOnly: boolean;
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean, $audioOnly?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineIkConstraint extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineTransformConstraint extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpinePathConstraint extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineSkin extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            public defaultAsEmptyString: boolean;
            
            public constructor($startsWith?: string, $dataField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean, $defaultAsEmptyString?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineAttachment extends Spine.Unity.SpineAttributeBase implements System.Runtime.InteropServices._Attribute{
            
            public returnAttachmentPath: boolean;
            public currentSkinOnly: boolean;
            public placeholdersOnly: boolean;
            public skinField: string;
            public slotField: string;
            
            public static GetHierarchy($fullPath: string):Spine.Unity.SpineAttachment.Hierarchy;
            
            public static GetAttachment($attachmentPath: string, $skeletonData: Spine.SkeletonData):Spine.Attachment;
            
            public static GetAttachment($attachmentPath: string, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset):Spine.Attachment;
            
            public constructor($currentSkinOnly?: boolean, $returnAttachmentPath?: boolean, $placeholdersOnly?: boolean, $slotField?: string, $dataField?: string, $skinField?: string, $includeNone?: boolean, $fallbackToTextField?: boolean);
            
            public constructor();
            
        }
        
        
        class SpineAtlasRegion extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute{
            
            public atlasAssetField: string;
            
            public constructor($atlasAssetField?: string);
            
            public constructor();
            
        }
        
        
        class MaterialChecks extends System.Object{
            
            public static kPMANotSupportedLinearMessage: string;
            public static kZSpacingRequiredMessage: string;
            public static kZSpacingRecommendedMessage: string;
            public static kAddNormalsRequiredMessage: string;
            
            public static IsMaterialSetupProblematic($renderer: Spine.Unity.SkeletonRenderer, $errorMessage: $Ref<string>):boolean;
            
            public static IsMaterialSetupProblematic($material: UnityEngine.Material, $errorMessage: $Ref<string>):boolean;
            
            public static IsZSpacingRequired($material: UnityEngine.Material, $errorMessage: $Ref<string>):boolean;
            
            public static IsColorSpaceSupported($material: UnityEngine.Material, $errorMessage: $Ref<string>):boolean;
            
            public static UsesSpineShader($material: UnityEngine.Material):boolean;
            
            public static IsTextureSetupProblematic($material: UnityEngine.Material, $colorSpace: UnityEngine.ColorSpace, $sRGBTexture: boolean, $mipmapEnabled: boolean, $alphaIsTransparency: boolean, $texturePath: string, $materialPath: string, $errorMessage: $Ref<string>):boolean;
            
            public static EnablePMAAtMaterial($material: UnityEngine.Material, $enablePMA: boolean):void;
            
            public constructor();
            
        }
        
        
        class SkeletonExtensions extends System.Object{
            
            
            public static GetColor($s: Spine.Skeleton):UnityEngine.Color;
            
            public static GetColor($a: Spine.RegionAttachment):UnityEngine.Color;
            
            public static GetColor($a: Spine.MeshAttachment):UnityEngine.Color;
            
            public static GetColor($s: Spine.Slot):UnityEngine.Color;
            
            public static GetColorTintBlack($s: Spine.Slot):UnityEngine.Color;
            
            public static SetColor($skeleton: Spine.Skeleton, $color: UnityEngine.Color):void;
            
            public static SetColor($skeleton: Spine.Skeleton, $color: UnityEngine.Color32):void;
            
            public static SetColor($slot: Spine.Slot, $color: UnityEngine.Color):void;
            
            public static SetColor($slot: Spine.Slot, $color: UnityEngine.Color32):void;
            
            public static SetColor($attachment: Spine.RegionAttachment, $color: UnityEngine.Color):void;
            
            public static SetColor($attachment: Spine.RegionAttachment, $color: UnityEngine.Color32):void;
            
            public static SetColor($attachment: Spine.MeshAttachment, $color: UnityEngine.Color):void;
            
            public static SetColor($attachment: Spine.MeshAttachment, $color: UnityEngine.Color32):void;
            
            public static SetLocalScale($skeleton: Spine.Skeleton, $scale: UnityEngine.Vector2):void;
            
            public static GetMatrix4x4($bone: Spine.Bone):UnityEngine.Matrix4x4;
            
            public static SetLocalPosition($bone: Spine.Bone, $position: UnityEngine.Vector2):void;
            
            public static SetLocalPosition($bone: Spine.Bone, $position: UnityEngine.Vector3):void;
            
            public static GetLocalPosition($bone: Spine.Bone):UnityEngine.Vector2;
            
            public static GetSkeletonSpacePosition($bone: Spine.Bone):UnityEngine.Vector2;
            
            public static GetSkeletonSpacePosition($bone: Spine.Bone, $boneLocal: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static GetWorldPosition($bone: Spine.Bone, $spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
            public static GetWorldPosition($bone: Spine.Bone, $spineGameObjectTransform: UnityEngine.Transform, $positionScale: number):UnityEngine.Vector3;
            
            public static GetQuaternion($bone: Spine.Bone):UnityEngine.Quaternion;
            
            public static GetLocalQuaternion($bone: Spine.Bone):UnityEngine.Quaternion;
            
            public static GetLocalScale($skeleton: Spine.Skeleton):UnityEngine.Vector2;
            
            public static GetWorldToLocalMatrix($bone: Spine.Bone, $ia: $Ref<number>, $ib: $Ref<number>, $ic: $Ref<number>, $id: $Ref<number>):void;
            
            public static WorldToLocal($bone: Spine.Bone, $worldPosition: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static SetPositionSkeletonSpace($bone: Spine.Bone, $skeletonSpacePosition: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static GetMaterial($a: Spine.Attachment):UnityEngine.Material;
            
            public static GetLocalVertices($va: Spine.VertexAttachment, $slot: Spine.Slot, $buffer: System.Array$1<UnityEngine.Vector2>):System.Array$1<UnityEngine.Vector2>;
            
            public static GetWorldVertices($a: Spine.VertexAttachment, $slot: Spine.Slot, $buffer: System.Array$1<UnityEngine.Vector2>):System.Array$1<UnityEngine.Vector2>;
            
            public static GetWorldPosition($attachment: Spine.PointAttachment, $slot: Spine.Slot, $spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
            public static GetWorldPosition($attachment: Spine.PointAttachment, $bone: Spine.Bone, $spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
        }
        
        
        class WaitForSpineAnimation extends System.Object implements System.Collections.IEnumerator{
            
            
            public NowWaitFor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes):Spine.Unity.WaitForSpineAnimation;
            
            public constructor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes);
            
            public constructor();
            
        }
        
        
        class WaitForSpineAnimationComplete extends Spine.Unity.WaitForSpineAnimation implements System.Collections.IEnumerator{
            
            
            public NowWaitFor($trackEntry: Spine.TrackEntry, $includeEndEvent?: boolean):Spine.Unity.WaitForSpineAnimationComplete;
            
            public constructor($trackEntry: Spine.TrackEntry, $includeEndEvent?: boolean);
            
            public NowWaitFor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes):Spine.Unity.WaitForSpineAnimation;
            
            public constructor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes);
            
            public constructor();
            
        }
        
        
        class WaitForSpineAnimationEnd extends Spine.Unity.WaitForSpineAnimation implements System.Collections.IEnumerator{
            
            
            public NowWaitFor($trackEntry: Spine.TrackEntry):Spine.Unity.WaitForSpineAnimationEnd;
            
            public constructor($trackEntry: Spine.TrackEntry);
            
            public NowWaitFor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes):Spine.Unity.WaitForSpineAnimation;
            
            public constructor($trackEntry: Spine.TrackEntry, $eventsToWaitFor: Spine.Unity.WaitForSpineAnimation.AnimationEventTypes);
            
            public constructor();
            
        }
        
        
        class WaitForSpineEvent extends System.Object implements System.Collections.IEnumerator{
            
            public get WillUnsubscribeAfterFiring(): boolean;
            public set WillUnsubscribeAfterFiring(value: boolean);
            
            
            public NowWaitFor($state: Spine.AnimationState, $eventDataReference: Spine.EventData, $unsubscribeAfterFiring?: boolean):Spine.Unity.WaitForSpineEvent;
            
            public NowWaitFor($state: Spine.AnimationState, $eventName: string, $unsubscribeAfterFiring?: boolean):Spine.Unity.WaitForSpineEvent;
            
            public constructor($state: Spine.AnimationState, $eventDataReference: Spine.EventData, $unsubscribeAfterFiring?: boolean);
            
            public constructor($skeletonAnimation: Spine.Unity.SkeletonAnimation, $eventDataReference: Spine.EventData, $unsubscribeAfterFiring?: boolean);
            
            public constructor($state: Spine.AnimationState, $eventName: string, $unsubscribeAfterFiring?: boolean);
            
            public constructor($skeletonAnimation: Spine.Unity.SkeletonAnimation, $eventName: string, $unsubscribeAfterFiring?: boolean);
            
            public constructor();
            
        }
        
        
        class WaitForSpineTrackEntryEnd extends System.Object implements System.Collections.IEnumerator{
            
            
            public NowWaitFor($trackEntry: Spine.TrackEntry):Spine.Unity.WaitForSpineTrackEntryEnd;
            
            public constructor($trackEntry: Spine.TrackEntry);
            
            public constructor();
            
        }
        
        
        class SkeletonAnimationFixedTimestep extends UnityEngine.MonoBehaviour{
            
            public skeletonAnimation: Spine.Unity.SkeletonAnimation;
            public frameDeltaTime: number;
            public maxFrameSkip: number;
            public frameskipMeshUpdate: boolean;
            public timeOffset: number;
            
            public constructor();
            
        }
        
        
        class SkeletonAnimationMulti extends UnityEngine.MonoBehaviour{
            
            public initialFlipX: boolean;
            public initialFlipY: boolean;
            public initialAnimation: string;
            public initialLoop: boolean;
            public skeletonDataAssets: System.Collections.Generic.List$1<Spine.Unity.SkeletonDataAsset>;
            public meshGeneratorSettings: Spine.Unity.MeshGenerator.Settings;
            public get AnimationSkeletonTable(): System.Collections.Generic.Dictionary$2<Spine.Animation, Spine.Unity.SkeletonAnimation>;
            
            
            public get AnimationNameTable(): System.Collections.Generic.Dictionary$2<string, Spine.Animation>;
            
            
            public get CurrentSkeletonAnimation(): Spine.Unity.SkeletonAnimation;
            
            
            
            public Initialize($overwrite: boolean):void;
            
            public FindAnimation($animationName: string):Spine.Animation;
            
            public SetAnimation($animationName: string, $loop: boolean):Spine.TrackEntry;
            
            public SetAnimation($animation: Spine.Animation, $loop: boolean):Spine.TrackEntry;
            
            public SetEmptyAnimation($mixDuration: number):void;
            
            public ClearAnimation():void;
            
            public GetCurrent():Spine.TrackEntry;
            
            public constructor();
            
        }
        
        
    }
    namespace Spine {
        
        class Animation extends System.Object{
            
            
        }
        
        
        class Atlas extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<Spine.AtlasRegion>{
            
            
        }
        
        
        class AtlasRegion extends System.Object{
            
            
        }
        
        
        class EventData extends System.Object{
            
            
        }
        
        
        interface AttachmentLoader{
            
            
        }
        
        
        class RegionAttachment extends Spine.Attachment implements Spine.IHasRendererObject{
            
            
        }
        
        
        interface RegionAttachment {
            
            GetColor():UnityEngine.Color;
            
            SetColor($color: UnityEngine.Color):void;
            
            SetColor($color: UnityEngine.Color32):void;
            
        }
        
        
        class Attachment extends System.Object{
            
            
        }
        
        
        interface Attachment {
            
            GetMaterial():UnityEngine.Material;
            
        }
        
        
        interface IHasRendererObject{
            
            
        }
        
        
        class Skin extends System.Object{
            
            
        }
        
        
        class MeshAttachment extends Spine.VertexAttachment implements Spine.IHasRendererObject{
            
            
        }
        
        
        interface MeshAttachment {
            
            GetColor():UnityEngine.Color;
            
            SetColor($color: UnityEngine.Color):void;
            
            SetColor($color: UnityEngine.Color32):void;
            
        }
        
        
        class VertexAttachment extends Spine.Attachment{
            
            
        }
        
        
        interface VertexAttachment {
            
            GetLocalVertices($slot: Spine.Slot, $buffer: System.Array$1<UnityEngine.Vector2>):System.Array$1<UnityEngine.Vector2>;
            
            GetWorldVertices($slot: Spine.Slot, $buffer: System.Array$1<UnityEngine.Vector2>):System.Array$1<UnityEngine.Vector2>;
            
        }
        
        
        class BoundingBoxAttachment extends Spine.VertexAttachment{
            
            
        }
        
        
        class PathAttachment extends Spine.VertexAttachment{
            
            
        }
        
        
        class PointAttachment extends Spine.Attachment{
            
            
        }
        
        
        interface PointAttachment {
            
            GetWorldPosition($slot: Spine.Slot, $spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
            GetWorldPosition($bone: Spine.Bone, $spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
        }
        
        
        class ClippingAttachment extends Spine.VertexAttachment{
            
            
        }
        
        
        class AnimationStateData extends System.Object{
            
            
        }
        
        
        class SkeletonData extends System.Object{
            
            
        }
        
        
        interface TextureLoader{
            
            
        }
        
        
        class AtlasPage extends System.Object{
            
            
        }
        
        
        class Bone extends System.Object implements Spine.IUpdatable{
            
            
        }
        
        
        interface Bone {
            
            GetMatrix4x4():UnityEngine.Matrix4x4;
            
            SetLocalPosition($position: UnityEngine.Vector2):void;
            
            SetLocalPosition($position: UnityEngine.Vector3):void;
            
            GetLocalPosition():UnityEngine.Vector2;
            
            GetSkeletonSpacePosition():UnityEngine.Vector2;
            
            GetSkeletonSpacePosition($boneLocal: UnityEngine.Vector2):UnityEngine.Vector2;
            
            GetWorldPosition($spineGameObjectTransform: UnityEngine.Transform):UnityEngine.Vector3;
            
            GetWorldPosition($spineGameObjectTransform: UnityEngine.Transform, $positionScale: number):UnityEngine.Vector3;
            
            GetQuaternion():UnityEngine.Quaternion;
            
            GetLocalQuaternion():UnityEngine.Quaternion;
            
            GetWorldToLocalMatrix($ia: $Ref<number>, $ib: $Ref<number>, $ic: $Ref<number>, $id: $Ref<number>):void;
            
            WorldToLocal($worldPosition: UnityEngine.Vector2):UnityEngine.Vector2;
            
            SetPositionSkeletonSpace($skeletonSpacePosition: UnityEngine.Vector2):UnityEngine.Vector2;
            
        }
        
        
        interface IUpdatable{
            
            
        }
        
        
        class Slot extends System.Object{
            
            
        }
        
        
        interface Slot {
            
            GetColor():UnityEngine.Color;
            
            GetColorTintBlack():UnityEngine.Color;
            
            SetColor($color: UnityEngine.Color):void;
            
            SetColor($color: UnityEngine.Color32):void;
            
        }
        
        
        class AnimationState extends System.Object{
            
            
        }
        
        
        class Skeleton extends System.Object{
            
            
        }
        
        
        interface Skeleton {
            
            GetColor():UnityEngine.Color;
            
            SetColor($color: UnityEngine.Color):void;
            
            SetColor($color: UnityEngine.Color32):void;
            
            SetLocalScale($scale: UnityEngine.Vector2):void;
            
            GetLocalScale():UnityEngine.Vector2;
            
        }
        
        
        class ExposedList$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{
            
            
        }
        
        
        class BoneData extends System.Object{
            
            
        }
        
        
        class TrackEntry extends System.Object implements Spine.Pool$1.IPoolable<Spine.TrackEntry>{
            
            
        }
        
        
        enum MixBlend{ Setup = 0, First = 1, Replace = 2, Add = 3 }
        
        
    }
    namespace Spine.Unity.SkeletonDataCompatibility {
        
        class VersionInfo extends System.Object{
            
            public rawVersion: string;
            public version: System.Array$1<number>;
            public sourceType: Spine.Unity.SkeletonDataCompatibility.SourceType;
            
            public constructor();
            
        }
        
        
        class CompatibilityProblemInfo extends System.Object{
            
            public actualVersion: Spine.Unity.SkeletonDataCompatibility.VersionInfo;
            public compatibleVersions: System.Array$1<System.Array$1<number>>;
            
            public DescriptionString():string;
            
            public constructor();
            
        }
        
        
        enum SourceType{ Json = 0, Binary = 1 }
        
        
    }
    namespace UnityEngine.U2D {
        /** Sprite Atlas is an asset created within Unity. It is part of the built-in sprite packing solution. */
        class SpriteAtlas extends UnityEngine.Object{
            
            
        }
        
        
    }
    namespace UnityEngine.UI {
        
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable{
            
            
        }
        
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement{
            
            
        }
        
        
        interface ICanvasElement{
            
            
        }
        
        
        interface IMaterialModifier{
            
            
        }
        
        
        interface IMaskable{
            
            
        }
        
        
        interface IClippable{
            
            
        }
        
        
        enum CanvasUpdate{ Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour{
            
            
        }
        
        
    }
    namespace Spine.Unity.SkeletonGraphic {
        
        type SkeletonRendererDelegate = (skeletonGraphic: Spine.Unity.SkeletonGraphic) => void;
        var SkeletonRendererDelegate: {new (func: (skeletonGraphic: Spine.Unity.SkeletonGraphic) => void): SkeletonRendererDelegate;}
        
        
    }
    namespace Spine.Unity.SkeletonMecanim {
        
        class MecanimTranslator extends System.Object{
            
            public autoReset: boolean;
            public useCustomMixMode: boolean;
            public layerMixModes: System.Array$1<Spine.Unity.SkeletonMecanim.MecanimTranslator.MixMode>;
            public layerBlendModes: System.Array$1<Spine.MixBlend>;
            public get Animator(): UnityEngine.Animator;
            
            
            public get MecanimLayerCount(): number;
            
            
            public get MecanimLayerNames(): System.Array$1<string>;
            
            
            
            public add_OnClipApplied($value: Spine.Unity.SkeletonMecanim.MecanimTranslator.OnClipAppliedDelegate):void;
            
            public remove_OnClipApplied($value: Spine.Unity.SkeletonMecanim.MecanimTranslator.OnClipAppliedDelegate):void;
            
            public Initialize($animator: UnityEngine.Animator, $skeletonDataAsset: Spine.Unity.SkeletonDataAsset):void;
            
            public Apply($skeleton: Spine.Skeleton):void;
            
            public constructor();
            
        }
        
        
    }
    namespace Spine.Unity.SkeletonRenderer {
        
        class SpriteMaskInteractionMaterials extends System.Object{
            
            public materialsMaskDisabled: System.Array$1<UnityEngine.Material>;
            public materialsInsideMask: System.Array$1<UnityEngine.Material>;
            public materialsOutsideMask: System.Array$1<UnityEngine.Material>;
            public get AnyMaterialCreated(): boolean;
            
            
            
            public constructor();
            
        }
        
        
        type InstructionDelegate = (instruction: Spine.Unity.SkeletonRendererInstruction) => void;
        var InstructionDelegate: {new (func: (instruction: Spine.Unity.SkeletonRendererInstruction) => void): InstructionDelegate;}
        
        
        type SkeletonRendererDelegate = (skeletonRenderer: Spine.Unity.SkeletonRenderer) => void;
        var SkeletonRendererDelegate: {new (func: (skeletonRenderer: Spine.Unity.SkeletonRenderer) => void): SkeletonRendererDelegate;}
        
        
    }
    namespace Spine.Unity.MeshGenerator {
        
        class Settings extends System.ValueType{
            
            public useClipping: boolean;
            public zSpacing: number;
            public pmaVertexColors: boolean;
            public tintBlack: boolean;
            public calculateTangents: boolean;
            public addNormals: boolean;
            public immutableTriangles: boolean;
            public static get Default(): Spine.Unity.MeshGenerator.Settings;
            
            
            
        }
        
        
    }
    namespace Spine.Unity.SkeletonUtility {
        
        type SkeletonUtilityDelegate = () => void;
        var SkeletonUtilityDelegate: {new (func: () => void): SkeletonUtilityDelegate;}
        
        
    }
    namespace Spine.Unity.SkeletonUtilityBone {
        
        enum Mode{ Follow = 0, Override = 1 }
        
        
        enum UpdatePhase{ Local = 0, World = 1, Complete = 2 }
        
        
    }
    namespace Spine.Unity.MeshRendererBuffers {
        
        class SmartMesh extends System.Object implements System.IDisposable{
            
            public mesh: UnityEngine.Mesh;
            public instructionUsed: Spine.Unity.SkeletonRendererInstruction;
            
            public Clear():void;
            
            public Dispose():void;
            
            public constructor();
            
        }
        
        
    }
    namespace Spine.Unity.SpineAttachment {
        
        class Hierarchy extends System.ValueType{
            
            public skin: string;
            public slot: string;
            public name: string;
            
            public constructor($fullPath: string);
            
            public constructor();
            
        }
        
        
    }
    namespace Spine.Pool$1 {
        
        interface IPoolable<T>{
            
            
        }
        
        
    }
    namespace Spine.Unity.WaitForSpineAnimation {
        
        enum AnimationEventTypes{ Start = 1, Interrupt = 2, End = 4, Dispose = 8, Complete = 16 }
        
        
    }
    namespace Spine.Unity.SkeletonMecanim.MecanimTranslator {
        
        enum MixMode{ AlwaysMix = 0, MixNext = 1, Hard = 2 }
        
        
        type OnClipAppliedDelegate = (clip: Spine.Animation, layerIndex: number, weight: number, time: number, lastTime: number, playsBackward: boolean) => void;
        var OnClipAppliedDelegate: {new (func: (clip: Spine.Animation, layerIndex: number, weight: number, time: number, lastTime: number, playsBackward: boolean) => void): OnClipAppliedDelegate;}
        
        
    }
    namespace Spine.Unity.SkeletonGraphicCustomMaterials {
        
        class AtlasMaterialOverride extends System.ValueType implements System.IEquatable$1<Spine.Unity.SkeletonGraphicCustomMaterials.AtlasMaterialOverride>{
            
            public overrideEnabled: boolean;
            public originalTexture: UnityEngine.Texture;
            public replacementMaterial: UnityEngine.Material;
            
            public Equals($other: Spine.Unity.SkeletonGraphicCustomMaterials.AtlasMaterialOverride):boolean;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
        class AtlasTextureOverride extends System.ValueType implements System.IEquatable$1<Spine.Unity.SkeletonGraphicCustomMaterials.AtlasTextureOverride>{
            
            public overrideEnabled: boolean;
            public originalTexture: UnityEngine.Texture;
            public replacementTexture: UnityEngine.Texture;
            
            public Equals($other: Spine.Unity.SkeletonGraphicCustomMaterials.AtlasTextureOverride):boolean;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
    }
    namespace Spine.Unity.SkeletonRendererCustomMaterials {
        
        class SlotMaterialOverride extends System.ValueType implements System.IEquatable$1<Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride>{
            
            public overrideDisabled: boolean;
            public slotName: string;
            public material: UnityEngine.Material;
            
            public Equals($other: Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride):boolean;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
        class AtlasMaterialOverride extends System.ValueType implements System.IEquatable$1<Spine.Unity.SkeletonRendererCustomMaterials.AtlasMaterialOverride>{
            
            public overrideDisabled: boolean;
            public originalMaterial: UnityEngine.Material;
            public replacementMaterial: UnityEngine.Material;
            
            public Equals($other: Spine.Unity.SkeletonRendererCustomMaterials.AtlasMaterialOverride):boolean;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
    }
    
}