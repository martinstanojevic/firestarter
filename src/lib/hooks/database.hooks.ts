import 'client-only';

import { useEffect, useState } from 'react';
import { ref, onValue, off, remove, push, set, type DataSnapshot } from 'firebase/database';
import { database } from '@/firebase';

const useDatabase = <T>(path: string, isList: boolean) => {
  const [data, setData] = useState<T | T[]>(isList ? [] : (null as unknown as T));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dbRef = ref(database, path);

    const handleValueChange = (snapshot: DataSnapshot) => {
      const value = snapshot.val();

      if (isList) {
        const list: T[] = value
          ? Object.keys(value).map((key) => ({ id: key, ...value[key] }))
          : [];
        setData(list);
      } else {
        setData({ ...value, id: snapshot.key } as T);
      }

      setLoading(false);
    };

    const handleError = (error: Error) => {
      setError(error.message);
      setLoading(false);
    };

    onValue(dbRef, handleValueChange, handleError);

    return () => off(dbRef, 'value', handleValueChange);
  }, [path, isList]);

  return { data, loading, error };
};

export const useDatabaseList = <T>(path: string) => {
  const { data, loading } = useDatabase<T>(path, true);

  const addData = async (data: Partial<T>) => {
    const dbRef = ref(database, path);
    return push(dbRef, data);
  };
  return { data: data as T[], loading, add: addData };
};

export const useDatabaseObject = <T>(path: string) => {
  const { data, loading } = useDatabase<T>(path, false);

  const deleteData = async () => {
    const dbRef = ref(database, path);
    return remove(dbRef);
  };

  const updateData = async (data: T) => {
    const dbRef = ref(database, path);
    return set(dbRef, data);
  };

  return { data: data as T, loading, delete: deleteData, update: updateData };
};
