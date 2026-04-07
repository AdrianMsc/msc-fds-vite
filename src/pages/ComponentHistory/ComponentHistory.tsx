import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponentHistory } from '../../api/getComponentHistory';
import { IActivityLog } from '../../interfaces/activity.interface';
import { RootState } from '../../redux/store';
import { addToast, removeToast } from '../../redux/slices/toastSlice';

const ACTION_OPTIONS = [
  { value: '', label: 'All actions' },
  { value: 'component.created', label: 'Created' },
  { value: 'component.updated', label: 'Updated' },
  { value: 'component.deleted', label: 'Deleted' },
];

const ComponentHistoryPage: React.FC = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<IActivityLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [action, setAction] = useState('');
  const [componentId, setComponentId] = useState<number | ''>('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const componentsApiData = useSelector((state: RootState) => state.components);

  const componentOptions = useMemo(() => {
    if (!componentsApiData) return [];

    return componentsApiData
      .flatMap((group) => group.components)
      .map((component) => ({ id: component.id, name: component.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [componentsApiData]);

  const showFeedback = useCallback(
    (status: string, title: string, description?: string) => {
      const id = Date.now().toString();
      dispatch(addToast({ id, status, title, description }));
      setTimeout(() => dispatch(removeToast(id)), 3500);
    },
    [dispatch],
  );

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getComponentHistory({
          page,
          pageSize,
          action,
          componentId,
          startDate,
          endDate,
        });

        setItems(response.data.data ?? []);
        setTotalPages(response.data.pagination?.totalPages ?? 1);
        setTotal(response.data.pagination?.total ?? 0);
      } catch (requestError) {
        console.error('Error fetching component history:', requestError);
        setError('Failed to fetch component history.');
        showFeedback('error', 'History unavailable', 'Could not load component history.');
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [page, pageSize, action, componentId, startDate, endDate, showFeedback]);

  const actionLabel = (actionName: IActivityLog['action']) => {
    switch (actionName) {
      case 'component.created':
        return 'Created';
      case 'component.updated':
        return 'Updated';
      case 'component.deleted':
        return 'Deleted';
      default:
        return actionName;
    }
  };

  return (
    <main className="relative pb-6 mx-auto container">
      <h1 className="font-bold text-3xl">
        <small className="text-sm text-primary-blue">Administration</small>
        <br />
        Component History
      </h1>

      <p className="mt-3 text-sm text-gray-600">
        Track component create, update, and delete operations from the design system workflow.
      </p>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <select
          className="msc-input !w-full !p-2"
          value={action}
          onChange={(e) => {
            setAction(e.target.value);
            setPage(1);
          }}
        >
          {ACTION_OPTIONS.map((option) => (
            <option key={option.value || 'all'} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="msc-input !w-full !p-2"
          value={componentId}
          onChange={(e) => {
            const value = e.target.value;
            setComponentId(value ? Number(value) : '');
            setPage(1);
          }}
        >
          <option value="">All components</option>
          {componentOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="msc-input !w-full"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            setPage(1);
          }}
        />

        <input
          type="date"
          className="msc-input !w-full"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            setPage(1);
          }}
        />

        <button
          type="button"
          className="msc-btn msc-btn-blue-outline"
          onClick={() => {
            setAction('');
            setComponentId('');
            setStartDate('');
            setEndDate('');
            setPage(1);
            showFeedback('info', 'Filters cleared');
          }}
        >
          Reset
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {loading ? 'Loading history...' : `Total events: ${total}`}
      </div>

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50 text-center">
            <tr>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Component ID</th>
              <th className="px-4 py-3">Actor</th>
              <th className="px-4 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {!loading && items.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                  No history records found.
                </td>
              </tr>
            )}

            {items.map((item, idx) => (
              <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  {new Date(item.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-center font-semibold">{actionLabel(item.action)}</td>
                <td className="px-4 py-3 text-center">{item.component_id ?? '-'}</td>
                <td className="px-4 py-3 text-center">{item.actor_email ?? 'System'}</td>
                <td className="px-4 py-3">
                  <pre className="text-xs whitespace-pre-wrap break-words max-w-[480px] overflow-hidden">
                    {JSON.stringify(item.details, null, 2)}
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-3 mt-5">
        <button
          type="button"
          className="msc-btn msc-btn-blue-outline"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1 || loading}
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          type="button"
          className="msc-btn msc-btn-blue-outline"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page >= totalPages || loading}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default ComponentHistoryPage;
